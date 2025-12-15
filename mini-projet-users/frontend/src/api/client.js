const API_URL = "http://localhost:8000";

/**
 * ======================
 * AUTHENTIFICATION
 * ======================
 */

// LOGIN
export async function login(username, password) {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);

  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Identifiants incorrects");
  }

  return response.json();
}

// REGISTER
export async function register(username, email, password, role) {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
      role, // "admin" ou "user"
    }),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.detail || "Erreur lors de l'inscription");
  }

  return response.json();
}

/**
 * ======================
 * UTILISATEUR CONNECTÉ
 * ======================
 */

export async function getMe(token) {
  const response = await fetch(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Non autorisé");
  }

  return response.json();
}

/**
 * ======================
 * ADMIN
 * ======================
 */

export async function getUsers(token, role = null, sort = null) {
  let url = `${API_URL}/admin/users`;
  const params = [];

  if (role) params.push(`role=${encodeURIComponent(role)}`);
  if (sort) params.push(`sort=${encodeURIComponent(sort)}`);

  if (params.length > 0) {
    url += `?${params.join("&")}`;
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Accès refusé (admin uniquement)");
  }

  return response.json();
}
