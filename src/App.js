import logo from './logo.svg';
import './App.css';
import Home from './Home';
import 'react-toastify/dist/ReactToastify.css';
import TodoList from './components/TodoList';
import Nav from './nav/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">

      <header className="App-header">
      <Nav/>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
             <Switch>
        <Route exact path="/" component={Home}/>
          
          <Route path="/todolist" component={TodoList}/>
          
        </Switch>
              </header>             
    </div>

    </Router>
    
    
  );
}

export default App;
