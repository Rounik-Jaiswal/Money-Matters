import React, { useState, useEffect } from "react";
import "./Accounts.css";
import {
  diffAccount1,
  diffAccount2,
  getAccount1credit,
  getAccount1debit,
  getAccount2credit,
  getAccount2debit,
} from "./Record";

function Accounts() {
  return (
    <div className="accounts">
      <div className="acc">
        <h1>
          Account
          <br />
          <font color="#66FF00">Details</font>
        </h1>
      </div>
      <div className="acc_list">
        <h2>List of Bank Accounts</h2>

        <div id="account1">
          <p className="Heading">Account-1</p>
          <font color="#66FF00" className="format">
            <p className="val" id="udAc1cr">Total Amount Credit : {getAccount1credit().toFixed(2)}</p>
          </font>
          <font color="red" className="format">
            <p className="val" id="udAc1db">Total Amount Debit : {getAccount1debit().toFixed(2)}</p>
          </font>
          <font color="white" className="format">
            <p className="val" id="udAc1net">Net Amount Available : {diffAccount1().toFixed(2)}</p>
          </font>
        </div>

        <div id="account2">
          <p className="Heading" >Account-2</p>
          <font color="#66FF00" className="format">
          <p className="val" id="udAc2cr">Total Amount Credit : {getAccount2credit().toFixed(2)}</p>
          </font>
          <font color="red" className="format" >
          <p className="val" id="udAc2db">Total Amount Debit : {getAccount2debit().toFixed(2)}</p>
          </font>
          <font color="white" className="format">
          <p className="val" id="udAc2net">Net Amount Available : {diffAccount2().toFixed(2)}</p>
          </font>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
