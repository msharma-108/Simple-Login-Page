import  express  from 'express';
import { handlelogin } from '../controllers/logincontroller';
const loginrouter:express.Router = express.Router();
loginrouter.post("/login",handlelogin)
export default loginrouter
