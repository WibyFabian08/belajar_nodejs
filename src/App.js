import { Container } from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import "./App.css";
import Home from "./Component/Functional/Home";
import Child1 from './Component/Class/Child1';

function App() {
  return(
    <div>
      <Container>
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>
          <Switch>
            <Route exact path='/child1' component={Child1}/>
          </Switch>
        </Router>
      </Container>
    </div>
  )
}

export default App;
