
import { PrismaClient } from '@prisma/client';
import { Request,Response } from 'express';
const { check, validationResult } = require("express-validator")

const prisma = new PrismaClient();

export const handlelogin =[
    check("email")
  .isEmail()
  .withMessage("Please enter a valid email")
  .normalizeEmail(),

  check("password")
  .isLength({min: 8})
  .withMessage("Password should be atleast 8 characters long")
  .matches(/[A-Z]/)
  .withMessage("Password should contain atleast one uppercase letter")
  .matches(/[a-z]/)
  .withMessage("Password should contain atleast one lowercase letter")
  .matches(/[0-9]/)
  .withMessage("Password should contain atleast one number")
  .matches(/[!"#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~]/)
  .withMessage("Password should contain atleast one special character")
  .trim()
  
  ,
    
    async(
        req: Request<{}, {}, { email: string; password: string },{}>, // req.body
        res: Response
      ): Promise<void>=>{
        const { email, password } = req.body;
        const errors=validationResult(req)
        if(!errors.isEmpty()){
             res.status(400).json({message:errors.array()[0].msg})
        }
        try {
            const user = await prisma.user.findFirst({
            where: { email, password }, 
            });
            if (!user)   res.status(401).json({ message: 'Invalid email or password' });
             res.status(200).json({ message: 'Login successful', user });
        } catch (error) {
             res.status(500).json({ message: 'Server error' });
        }
    }
]
