import React, { useState } from "react";
import { Container } from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import LandingPage from "../src/Pages/LandingPage";
import About from "../src/Pages/About";
import Sukses from "../src/Pages/Sukses";
import Blog from "../src/Pages/Blog";
import DetailBlog from "./Pages/DetailBlog";
import Mahasiswa from "./Pages/Mahasiswa";
import TambahData from "../src/Pages/TambahData";
import EditData from "./Pages/EditData";
import NavbarComp from "../src/Component/Functional/NavbarComp";
import HooksComp from "./Pages/HooksComp";
import UseEffect from "./Pages/UseEffect";
import { CartContext } from "./Pages/CartContext";
import ProdukContext from "./Pages/ProdukContext";

function App() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Container>
        <CartContext.Provider value={{ value, setValue }}>
          <Router>
            <NavbarComp></NavbarComp>
            <Switch>
              <Route exact path="/" component={LandingPage} />
            </Switch>
            <Switch>
              <Route path="/about" component={About} />
            </Switch>
            <Switch>
              <Route path="/sukses" component={Sukses} />
            </Switch>
            <Switch>
              <Route path="/blog" component={Blog} />
            </Switch>
            <Switch>
              <Route path="/detail/:id" component={DetailBlog} />
            </Switch>
            <Switch>
              <Route path="/mahasiswa" component={Mahasiswa} />
            </Switch>
            <Switch>
              <Route path="/tambah" component={TambahData} />
            </Switch>
            <Switch>
              <Route path="/edit" component={EditData} />
            </Switch>
            <Switch>
              <Route path="/hooks" component={HooksComp} />
            </Switch>
            <Switch>
              <Route path="/useeffect" component={UseEffect} />
            </Switch>
            <Switch>
              <Route path="/produkcontext" component={ProdukContext} />
            </Switch>
          </Router>
        </CartContext.Provider>
      </Container>
    </div>
  );
}

export default App;
