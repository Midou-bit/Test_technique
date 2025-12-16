import { useState } from "react";
import { register } from "../api/client";

export default function Register({ onBack }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await register(username, email, password, role);
      setMessage("Compte créé avec succès. Vous pouvez vous connecter.");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h2>Inscription</h2>

      <input
        placeholder="Nom d’utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">Utilisateur</option>
        <option value="admin">Administrateur</option>
      </select>

      <button type="submit">Créer un compte</button>

      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="button" className="logout" onClick={onBack}>
        Retour à la connexion
      </button>
    </form>
  );
}
