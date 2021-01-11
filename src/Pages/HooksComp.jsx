import React, { useState } from "react";
import "../Component/Class/CSS/Produk.css";
import TambahData from "./TambahData";
const HooksComp = () => {
  const [jumlah, setJumlah] = useState(1);
  const [status, setStatus] = useState('Tersedia');

  function tambahData()  {
      setJumlah(jumlah + 1)

      if(jumlah >= 0) {
          setStatus('Tersedia')
      }
  }

  function kurangData() {
      if(jumlah > 0) {
          setJumlah(jumlah - 1)
      }

      if(jumlah <= 1) {
        setStatus('Habis')
      }
  }

  return (
    <div className="body mt-3">
      <h2>Scanner</h2>
      <img src="../../Assets/scanner.png" alt="" width='200px' />
      <div className="keterangan">
        <p>
          Harga <strong>Rp. 150.000 </strong>
        </p>
        <p>Stock {jumlah} </p>
        <button className="btn-click" onClick={() => kurangData()}>Kurang</button> {" "}
        <button className="btn-click" onClick={() => tambahData()}>Tambah</button>
        <p>Status {status} </p>
      </div>
    </div>
  );
};

export default HooksComp;
