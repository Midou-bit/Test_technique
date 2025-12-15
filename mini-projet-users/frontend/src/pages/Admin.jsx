import { useEffect, useState } from "react";
import { getUsers } from "../api/client";

export default function Admin({ token }) {
  const [users, setUsers] = useState([]);
  const [role, setRole] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    getUsers(token, role, sort).then(setUsers);
  }, [token, role, sort]);

  return (
    <div className="container">
      <h2>Administration</h2>

      <label>
        Filtrer par rôle
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Tous</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </label>

      <label>
        Trier
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Aucun</option>
          <option value="username">Nom d’utilisateur</option>
        </select>
      </label>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.username} ({u.role})
          </li>
        ))}
      </ul>
    </div>
  );
}
