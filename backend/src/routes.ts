import {Router, Request, Response} from 'express';

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
    // throw new Error ("erro dsd")
    return res.json({ nome:"My Pizzaria" })
})

export { router }