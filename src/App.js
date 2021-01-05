import { Route, Switch,BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Component/Homepage';
import Login from './Component/Loginpage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component = {Login}/>
        <Route path = "/home" component = {Home}/>
      </Switch> 
    </div>
    </BrowserRouter>
  );
}

export default App;
