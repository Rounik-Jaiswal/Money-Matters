import React, { useState } from "react";
import "./Navbar.css";
import logo4 from "../images/logo4.png";

function Home1() {
  const [scrollToTop, setScrollToTop] = useState(false);

  const goHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    };
    
  const goTransactions = () => {
    window.scrollTo({
      top: 600,
      behavior: "smooth"
    });
    };
    
  const goAccounts = () => {
    window.scrollTo({
      top: 1180,
      behavior: "smooth"
    });
  };
  const goBudget = () => {
    window.scrollTo({
      top: 1800,
      behavior: "smooth"
    });
  };

  return (
    <nav id="body">
      <div className="logo">
        <img src={logo4} alt="Logo" />
        <h1>
          Money <font color="#66FF00">Matters</font>
        </h1>
      </div>
      <div id="links">
        <button onClick={goHome}>Home</button>
        <button onClick={goTransactions}>Transactions</button>
        <button onClick={goAccounts}>Accounts</button>
        <button onClick={goBudget}>Budget</button>
      </div>
    </nav>
  );
}

export default Home1;
