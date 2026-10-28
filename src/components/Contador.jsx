import { useEffect, useState } from "react";

export function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("Contador atualizado:", contador);
  }, [contador]);

  return (
    <div>
      <p>Valor: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>+</button>
    </div>
  );
}
