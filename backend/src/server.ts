import express, { Request, Response, NextFunction } from "express";
import 'express-async-errors'

import cors from 'cors'
import { router } from './routes'

const app = express();
app.use(express.json())

app.use(cors())

app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
   // if instance type error
    if(err instanceof Error) {
        return res.status(400).json({
           error: err.message
        })
    }

    return res.status(500).json({
        status: 'error', 
        message: 'Internal Server Error'
    })
})

app.listen(3333, () =>{
        console.log("Servidor On fire!")
        // throw new Error("Erro ao faze a requisição")
    }
 )