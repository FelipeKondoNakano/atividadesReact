import React, { useState, useEffect } from "react";

export default function Letreiro({ texto, intervalo = 150, delayReinicio = 1000 }) {
  const [exibido, setExibido] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer;

    if (index < texto.length) {
      timer = setTimeout(() => {
        setExibido(prev => prev + texto[index]);
        setIndex(prev => prev + 1);
      }, intervalo);
    } else {
      timer = setTimeout(() => {
        setExibido('');
        setIndex(0);
      }, delayReinicio);
    }

    return () => clearTimeout(timer);
  }, [index, texto, intervalo, delayReinicio]);

  return <h1 data-testid="letreiro">{exibido}</h1>;
}
