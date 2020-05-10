import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';


const Nav = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/otherpage">Other Page</Link></li>
    </ul>
  </div>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <Switch>
          <div>
            <Nav />
            <Route path="/" exact component={Fib} />
            <Route path="/otherpage" exact component={OtherPage} />
          </div>
        </Switch>
      </header>      
    </div>
  );
}

export default App;
