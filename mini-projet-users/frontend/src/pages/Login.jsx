import { useState } from "react";
import { login } from "../api/client";

export default function Login({ onLogin, onRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      const data = await login(username, password);
      onLogin(data.access_token);
    } catch {
      setError("Identifiants invalides");
    }
  }

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h2>Connexion</h2>

      <input
        placeholder="Nom d’utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Se connecter</button>

      <button type="button" className="logout" onClick={onRegister}>
        Créer un compte
      </button>

      {error && <p className="error">{error}</p>}
    </form>
  );
}
