import express, { Request, Response } from 'express';
import loginrouter from './routes/login';
import cors from 'cors';
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({origin: 'http://localhost:5173',}));
app.use(loginrouter)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
