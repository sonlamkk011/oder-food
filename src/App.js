import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Public from './Module/Public/Public';
import OverView from './Module/Public/OverView/OverView';


function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <OverView />
      </Route>
      
    </Switch>
    </BrowserRouter>
    <Public />

    </>
  );
}

export default App;
