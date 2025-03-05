import { useState } from "react";

interface CompteurProps {
  valeurInitiale: number;
  pas: number;
}

const Compteur = ({ valeurInitiale, pas }: CompteurProps) => {
  const [valeur, setValeur] = useState(valeurInitiale);

  return (
    <div style={{ textAlign: "center", margin: "10px" }}>
      <button onClick={() => setValeur(valeur - pas)}>-</button>
      <span style={{ margin: "0 10px", fontSize: "1.5rem" }}>{valeur}</span>
      <button onClick={() => setValeur(valeur + pas)}>+</button>
    </div>
  );
};

export default Compteur;
