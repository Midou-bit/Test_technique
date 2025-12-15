# Test technique

## Mini système de gestion d’utilisateurs

Ce projet est un mini système de gestion d’utilisateurs développé dans le cadre d’un test technique.  
Il permet de gérer l’inscription, l’authentification et l’accès aux données en fonction du rôle de l’utilisateur.

Le projet est composé :
- d’un **backend** (API REST)
- d’un **frontend** (interface utilisateur simple)

---

## Fonctionnalités

- Inscription d’un utilisateur  
  (nom d’utilisateur, email, mot de passe, rôle : admin / user)
- Connexion et déconnexion via JWT
- Accès sécurisé aux données utilisateur
- Interface utilisateur simple pour un utilisateur non-admin
- Interface administrateur :
  - consultation de la liste des utilisateurs
  - filtrage par rôle
  - tri par nom d’utilisateur

---

## Stack technique

### Backend
- FastAPI
- PostgreSQL
- SQLAlchemy
- JWT (JSON Web Token)
- Passlib (bcrypt)

### Frontend
- React
- Vite
- JavaScript (ES6)
- Fetch API

---

## Lancer le projet en local

### Prérequis
- Python 3.10+
- Node.js 18+
- PostgreSQL

---

## Lancer le backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload


### 2. Lancer le Frontend

```bash
cd frontend
npm install
npm run dev
