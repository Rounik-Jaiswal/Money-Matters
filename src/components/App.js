import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Record from './Record';
import Accounts from './Accounts';
import Budget from './Budget';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Home/>
      <Record/>
      <Accounts/>
      <Budget/>
    </div>
  );
}

export default App;
