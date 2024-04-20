import React from "react";
import './Home.css';
import mainlogo from '../images/mainlogo.png';

function Home() {
    return (
        <div className="home">
            <image id="mainlogo">
                <img src={mainlogo} alt="Main Logo" />
            </image>
            
            <div className="intro">
                <h1>Money <font id="intro_green" color="#66FF00">Matters</font> - Track, Save, Succeed.</h1>
                <h2>Empower Your Wallet !</h2>
                <br />
                <p><b id="intro_green">Expense <font id="intro_green" color="#66FF00">Tracking</font></b> - Effortlessly manage your finances by tracking every expense with ease.</p>
                <p><b id="intro_green">Budget <font id="intro_green" color="#66FF00">Management</font></b> - Set personalized budgets for various categories and track your spending against them.</p>
                <p><b id="intro_green">Smart <font id="intro_green" color="#66FF00">Analysis</font></b> - Gain valuable insights into your spending habits through visualized reports, graphs and charts.</p>
                <p><b id="intro_green">Financial <font id="intro_green" color="#66FF00">Planning</font></b> - Plan and achieve your financial goals with customizable targets and progress tracking.</p>
            </div>
        </div>
    )
};

export default Home;  