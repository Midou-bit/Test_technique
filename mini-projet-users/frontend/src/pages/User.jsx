export default function User({ user }) {
  return (
    <div className="container">
      <h2>Espace utilisateur</h2>

      <p>
        <strong>Nom d’utilisateur :</strong> {user.username}
      </p>

      <p>
        <strong>Rôle :</strong> {user.role}
      </p>
    </div>
  );
}
