import React from 'react';

export default function Contador({ titulo, valor, setValor, imagem }) {
  const incrementar = () => setValor(valor + 1);
  const decrementar = () => setValor(valor > 0 ? valor - 1 : 0);

  return (
    <div className="contador">
      <img src={imagem} alt={titulo} className="icone" />
      <div className="botoes">
        <button className="mais" onClick={incrementar}>➕</button>
        <button className="menos" onClick={decrementar}>➖</button>
      </div>
      <h3>{titulo}</h3>
      <div className="numero">{valor}</div>
    </div>
  );
}
