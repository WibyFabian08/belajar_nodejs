import { Container } from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import "./App.css";
import LandingPage from '../src/Pages/LandingPage';
import About from '../src/Pages/About';
import Sukses from '../src/Pages/Sukses';
import Blog from '../src/Pages/Blog';
import DetailBlog from "./Pages/DetailBlog";

function App() {
  return(
    <div>
      <Container>
        <Router>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
          </Switch>
          <Switch>
            <Route exact path='/about' component={About}/>
          </Switch>
          <Switch>
            <Route exact path='/sukses' component={Sukses}/>
          </Switch>
          <Switch>
            <Route exact path='/blog' component={Blog}/>
          </Switch>
          <Switch>
            <Route exact path='/detail/:id' component={DetailBlog}/>
          </Switch>
        </Router>
      </Container>
    </div>
  )
}

export default App;
