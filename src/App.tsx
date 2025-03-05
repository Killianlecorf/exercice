import { useState } from "react";
import Compteur from "./components/Compteur";
import Profil from "./components/Profil";
import Stopwatch from "./components/Stopwatch";

const App = () => {
  const [profils, setProfils] = useState<number[]>([]);
  const [isPaused, setIsPaused] = useState(false);

  const ajouterProfil = () => {
    setProfils([...profils, profils.length]);
  };

  return (
    <div>
      <h1>Mes compteurs</h1>
      <Compteur valeurInitiale={10} pas={1} />
      <Compteur valeurInitiale={50} pas={5} />

      <h1>Profils</h1>
      <button onClick={ajouterProfil}>Ajouter un profil</button>
      {profils.map((id) => (
        <Profil key={id} />
      ))}


      <h1>Stopwatch App</h1>
      <p>Le chrono est {isPaused ? "en pause" : "en cours"}</p>
      <Stopwatch onPauseChange={setIsPaused} />
    </div>
  );
};

export default App;
