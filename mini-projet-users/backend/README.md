
# Backend – Mini gestion d’utilisateurs

API développée avec FastAPI permettant la gestion des utilisateurs avec authentification JWT.

## Fonctionnalités
- Inscription utilisateur
- Connexion JWT
- Récupération du profil utilisateur connecté
- Accès administrateur avec filtres et tri

## Lancement

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
