import { Container } from "reactstrap";
import "./App.css";
import BoostrapComp from "./Component/Class/BoostrapComp";
import Parent from './Component/Class/Parent';

function App() {
  return(
    <div>
      <Container>
        <BoostrapComp></BoostrapComp>
        <Parent></Parent>
      </Container>
    </div>
  )
}

export default App;
