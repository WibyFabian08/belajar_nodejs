import logo from "./logo.svg";
import "./App.css";
import Home from "./Component/Functional/Home";
// import Blog from "../src/Component/Functional/Blog";
import Produk from "../src/Component/Class/Produk";
function App() {
  return (
    <div>
      <Home></Home>
      {/* <Blog
        tanggal="08/01/2021"
        judul="Blog Pertama"
        summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      ></Blog>
      <Blog
        tanggal="08/01/2021"
        judul="Blog Kedua"
        summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      ></Blog>
      <Blog
        tanggal="08/01/2021"
        judul="Blog Ketiga"
        summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      ></Blog>
      <Blog
        tanggal="08/01/2021"
        judul="Blog Keempat"
        summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      ></Blog>
      <Blog
        tanggal="08/01/2021"
        judul="Blog Kelima"
        summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      ></Blog> */}

      <Produk stock="10" nama="Hp Pavilion 2017" harga="33000000"></Produk>
      <Produk stock="10" nama="Hp Pavilion 2018" harga="33000000"></Produk>
      <Produk stock="10" nama="Hp Pavilion 2019" harga="33000000"></Produk>
      <Produk stock="10" nama="Hp Pavilion 2020" harga="33000000"></Produk>
      <Produk stock="10" nama="Hp Pavilion 2021" harga="33000000"></Produk>

    </div>
  );
}

export default App;
