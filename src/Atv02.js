import React, { useState } from 'react';
import Contador from './Components/Contador';
import { Link } from "react-router-dom";
import './atv02.css';

export default function Atv02() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const total = homens + mulheres;

  const resetar = () => {
    setHomens(0);
    setMulheres(0);
  };

  return (
    <div className="container">
      <h2>Total</h2>
      <div className="total">{total}</div>
      <button className="resetar" onClick={resetar}>Resetar Contador</button>

      <div className="contadores">
        <Contador
          titulo="Homens"
          valor={homens}
          setValor={setHomens}
          imagem="https://cdn-icons-png.flaticon.com/512/194/194935.png"
          />
        <Contador
          titulo="Mulheres"
          valor={mulheres}
          setValor={setMulheres}
          imagem="https://cdn-icons-png.flaticon.com/512/194/194938.png"
        />
      </div>
      <Link to="/" className="voltar-home">Home</Link>
    </div>
  );
}
