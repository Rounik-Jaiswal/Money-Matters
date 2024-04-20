import React, { useState, useEffect } from "react";
import "./Budget.css";
import { Record, getDifference, getTotalCredit, getTotalDebit } from "./Record";

function Budget() {
  return (
    <div className="budget">
      <div className="budget_list">
        <div className="bl1">
          <h2>Budget Plan</h2>
          <label htmlFor="saving">
            <font color="#66FF00" size="5" className="format">
              {" "}
              Enter the target saving percentage :
            </font>
          </label>
          <input type="number" id="saving" name="saving" />
          <br />
          <br />
          <button type="button" id="submit" onClick={submitBudget}>
            SUBMIT
          </button>
          <div id="result"></div>
        </div>
        <div className="bl2">
          <div className="income">
            <p>Income</p>
            <p id="updateCredit">{getTotalCredit().toFixed(2)}</p>
          </div>
          <div className="expenses">
            <p>Expenses</p>
            <p id="updateDebit"> {getTotalDebit().toFixed(2)}</p>
          </div>
          <div className="total">
            <p>Savings</p>
            <p id="updateDifference">{getDifference().toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div className="budget_name">
        <h1>
          Budget
          <br />
          <font color="#66FF00">Planning</font>
        </h1>
      </div>
    </div>
  );
}

function submitBudget() {
  const saving = document.getElementById("saving").value;
  calculateExpenses(saving);
}

function calculateExpenses(saving) {
  const credit = getTotalCredit().toFixed(2);
  const debit = getTotalDebit().toFixed(2);
  var extra = "N.A";
  var need = "N.A";
  var diff = credit - debit;
  var result = "";
  if (credit >= debit) {
    extra = (credit * saving) / 100;
    if (diff > extra) {
      result =
        "You have reached your saving target. You can spend " +
        (diff - extra).toFixed(2) +
        " money more.";
    } else {
      result =
        "You have to save " +
        (extra - diff).toFixed(2) +
        " money to reach your saving target.";
    }
  }
  if (debit > credit) {
    result ="You are spending more than your income . Please check your expenditure.";
  }

  const res = document.getElementById("result");
  const expected = "Expected savings : " + extra;
  const actual = "Actual Savings : " + diff;
  res.innerHTML = result + "<br/>" + expected + "<br/>" + actual;
}

export default Budget;
