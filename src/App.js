import React, { useState, createContext, useReducer } from "react";
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
import HooksReducer from "./Pages/HookReducer";
import Tagihan from "./Pages/Tagihan";

export const keranjangContext = createContext();

const initialState = {
  jumlah: 1,
  hargaSatuan: 10000,
  hargaTotal: 10000,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "tambah":
      return {
        ...state,
        jumlah: state.jumlah + 1,
        hargaTotal: state.hargaSatuan + state.jumlah * state.hargaSatuan,
      };
    case "kurang":
      return {
        ...state,
        jumlah: state.jumlah - 1,
        hargaTotal: state.jumlah * state.hargaSatuan - state.hargaSatuan,
      };
    default:
      return state;
  }
};

function App() {
  const [value, setValue] = useState(0);

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Container>
        <CartContext.Provider value={{ value, setValue }}>
          <Router>
            <NavbarComp></NavbarComp>
            <keranjangContext.Provider value={{keranjangState: count, keranjangDispatch: dispatch}}>
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
              <Switch>
                <Route path="/hookreducer" component={HooksReducer} />
              </Switch>
              <Switch>
                <Route path="/tagihan" component={Tagihan} />
              </Switch>
            </keranjangContext.Provider>
          </Router>
        </CartContext.Provider>
      </Container>
    </div>
  );
}

export default App;
