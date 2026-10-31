# HearAI

Multi-Agent Accessibility Assistant for deaf and hard-of-hearing users.

## Project structure

- `backend/`: FastAPI application
- `frontend/`: React + Vite application
- `modules/`: future AI modules (speech, sign, sound, safety agent)
- `docs/`: architecture and API documentation
- `data/`: local datasets (not committed)
- `models/`: local model artifacts (not committed)

## Requirements

- Python 3.11
- Node.js 22 LTS
- Git

## Run the backend (Windows PowerShell)

```powershell
cd backend
py -3.11 -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
Copy-Item .env.example .env
uvicorn app.main:app --reload
```

Backend: http://127.0.0.1:8000  
Swagger docs: http://127.0.0.1:8000/docs  
Health check: http://127.0.0.1:8000/health

## Run the frontend (second terminal)

```powershell
cd frontend
npm install
Copy-Item .env.example .env
npm run dev
```

Frontend: http://localhost:5173

## Current status

Initial scaffold only. AI models, RAG, agents, authentication, database, and production deployment will be added in later phases.
