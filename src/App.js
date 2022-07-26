import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Public from './Module/Public/Public';
import OverView from './Module/Public/OverView/OverView';
import Login from './Module/Public/Auth/Login/Login';
import Register from './Module/Public/Auth/Register/Register';


function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <OverView />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      
    </Switch>
    </BrowserRouter>
    <Public />

    </>
  );
}

export default App;
