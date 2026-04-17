# Backend Programming Template (2025)

## Development Setup

1. Fork and clone this repository to your local computer.
2. Open the project using VS Code.
3. Install the recommended VS Code extensions: `ESLint` and `Prettier`.
4. Copy and rename `.env.example` to `.env`. Open `.env` and change the database connection string.
5. Run `npm install` to install the project dependencies.
6. Run `npm run dev` to start the dev server.
7. Test the endpoints in the API client app.

## Add New API Endpoints

1. Create a new database schema in `./src/models`.
2. Create a new folder in `./src/api/components` (if needed). Remember to separate your codes to repositories, services, controllers, and routes.
3. Add the new route in `./src/api/routes.js`.
4. Test your new endpoints in the API client app.

## Cara Akses API gacha
POST ke http://localhost:5000/api/gacha/ dengan format { "username": "nama user" }

GET history gacha semua user ke http://localhost:5000/api/gacha/history

GET history gacha khusus 1 user dengan http://localhost:5000/api/gacha/history/:username misalnya http://localhost:5000/api/gacha/livi

GET data hadiah serta quota yang tersisa melalui http://localhost:5000/api/prizes

GET data pemenang gacha melalui http://localhost:5000/api/winners
