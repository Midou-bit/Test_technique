import { useState } from "react";

const API_URL = "http://localhost:8000";

export default function Register({ onBack }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
        role,
      }),
    });

    if (response.ok) {
      setMessage("Compte créé avec succès");
    } else {
      setMessage("Erreur lors de l’inscription");
    }
  }

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h2>Inscription</h2>

      <input
        placeholder="Nom d’utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">Utilisateur</option>
        <option value="admin">Administrateur</option>
      </select>

      <button type="submit">Créer un compte</button>

      {message && <p>{message}</p>}

      <button type="button" className="logout" onClick={onBack}>
        Retour à la connexion
      </button>
    </form>
  );
}
