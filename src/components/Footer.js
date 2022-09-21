import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleBlur() {
    if (!inputValue.includes("@")) {
      alert("Attention, votre adresse mail semble invalide.");
    }
  }

  return (
    <footer className="footer">
      <div className="footer-elem">
        Pour rester connecté(e) inscrivez-vous à notre newsletter 💌
      </div>
      <div className="footer-elem">Laissez-nous votre mail :</div>
      <input
        placeholder="Entrez votre mail"
        onChange={handleInput}
        value={inputValue}
        onBlur={handleBlur}
      />
    </footer>
  );
}

export default Footer;
