import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homes from "./Components/Homes/Homes";
import Project from "./Components/Projects/Project/Project";
import "./App.css"

function App() {  
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Homes></Homes>
          </Route>
          <Route path="/intro">
            <Homes></Homes>
          </Route>
          <Route path="/project">
            <Project></Project>
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
