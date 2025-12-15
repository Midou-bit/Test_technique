import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import User from "./pages/User";
import Admin from "./pages/Admin";
import { getMe } from "./api/client";

export default function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [mode, setMode] = useState("login"); // login | register

  function logout() {
    setToken(null);
    setUser(null);
    setMode("login");
  }

  useEffect(() => {
    if (token) {
      getMe(token)
        .then(setUser)
        .catch(() => logout());
    }
  }, [token]);

  if (!token) {
    return mode === "login" ? (
      <Login onLogin={setToken} onRegister={() => setMode("register")} />
    ) : (
      <Register onBack={() => setMode("login")} />
    );
  }

  if (!user) return <p className="container">Chargement…</p>;

  return (
    <div>
      <div className="container">
        <button className="logout" onClick={logout}>
          Déconnexion
        </button>
      </div>

      {user.role === "admin" ? (
        <Admin token={token} />
      ) : (
        <User user={user} />
      )}
    </div>
  );
}
