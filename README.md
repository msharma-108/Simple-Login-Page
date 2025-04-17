# 🛡️ Login Page – Full Stack Type-Safe App

This is a simple full-stack login page built with:

- 🧑‍💻 **TypeScript** for type safety
- 🧠 **React** (Frontend) + **Express** (Backend)
- 📦 **React Hook Form** + **Zod** for frontend form handling and validation
- ⚡ **React Query** + **Axios** for efficient API interaction
- ✅ **Express Validator** for backend validation
- 📊 **MongoDB** + **Prisma** for database operations

---
## 🚀 Features

- **React + Vite + TypeScript** frontend
- **Form validation** using `zod` and `react-hook-form`
- **Data fetching** with `react-query` and `axios`
- **Express backend** with `express-validator` for input validation
- **MongoDB via Prisma ORM**


---
## Installation steps
1. Clone the repo
```bash
git clone https://github.com/msharma-108/Simple-Login-Page.git
```

2. Make a .env file in the server folder referring from the .env.example file.
3. Enter your mongo URI in this file.
4. Enter the data from the dummydata.json file in your database
5. Open the client and server folders in 2 seperate terminals.
6. Install dependencies in both folders.
```bash
npm i
```
7. Since MongoDB doesn’t support SQL migrations, run this in the server terminal:
 ```bash
 npx prisma db push
 ```
8. Run the server and client using this command.
```bash
npm run dev
```
9. Use the dummydata.json file to test successful login.
### NOTE
Since it is only a login page, some dummy data must be in the database beforehand. This will come from the server/dummydata.json file.
