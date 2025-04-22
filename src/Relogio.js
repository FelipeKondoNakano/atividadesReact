import React, { useState, useEffect } from 'react';

export default function Relogio() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(timer); // Limpa o intervalo
  }, []);

  const horaFormatada = hora.toLocaleTimeString();

  return (
    <div class="relogio">
      <p data-testid="hora">{horaFormatada}</p>
    </div>
  );
}