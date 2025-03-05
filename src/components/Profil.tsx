import { useState } from "react";

const Profil = () => {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [age, setAge] = useState(0);

  // Fonction pour formater le prénom et le nom avec une majuscule
  const formatTexte = (texte: string) => {
    return texte.charAt(0).toUpperCase() + texte.slice(1);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <label>
        Prénom :
        <input
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(formatTexte(e.target.value))}
        />
      </label>
      <br />
      <label>
        Nom :
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(formatTexte(e.target.value))}
        />
      </label>
      <br />
      <label>
        Âge :
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
      </label>
      <br />
      <p>
        Bonjour, je m’appelle {prenom || "___"} {nom || "___"} et j’ai {age || "___"} ans.
      </p>
    </div>
  );
};

export default Profil;
