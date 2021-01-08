import logo from "./logo.svg";
import "./App.css";
import Home from "./Component/Functional/Home";
import Blog from "../src/Component/Functional/Blog";
// import Beranda from './Component/Class/Beranda';

function App() {
  return (
    <div>
      <Home></Home>
      <Blog
        tanggal="08/01/2021"
        judul="Blog Pertama"
        summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      ></Blog>
      <Blog
        tanggal="08/01/2021"
        judul="Blog Kedua"
        summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      ></Blog>
      <Blog
        tanggal="08/01/2021"
        judul="Blog Ketiga"
        summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      ></Blog>
      <Blog
        tanggal="08/01/2021"
        judul="Blog Keempat"
        summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      ></Blog>
      <Blog
        tanggal="08/01/2021"
        judul="Blog Kelima"
        summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      ></Blog>
      
    </div>
  );
}

export default App;
