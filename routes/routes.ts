import { Router, Request, Response } from 'express';

const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {

    res.json({ ok: true, mensaje: 'todo bien' })
});

router.post('/mensajes', (req: Request, res: Response) => {
    const { cuerpo, de } = req.body;
    res.json({ ok: true, mensaje: 'post bien', cuerpo, de })
});

router.post('/mensajes/:id', (req: Request, res: Response) => {
    const { cuerpo, de } = req.body;
    const id = req.params.id;
    res.json({ ok: true, mensaje: `post con id: ${id}`, cuerpo, de })
});
export default router;