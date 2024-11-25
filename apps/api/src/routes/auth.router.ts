import { IUsuario, IUsuarioESenha, iUsuarioLogado } from "@nx-monorepo/comum";
import { NextFunction, Request, Response, Router } from "express";
import { getCollection } from "../util/get-collection";


export const authRouter = Router();

authRouter.post('/login', async (req: Request, res: Response, next: NextFunction) => {

  const body: IUsuarioESenha = req.body;

 const usuario = await getCollection<IUsuario>(
    req.app,
    'usuarios',

  ).findOne(body);

  if(usuario) {
    const iUsuarioLogado: iUsuarioLogado = {
      usuario: usuario
    }
    res.json(iUsuarioLogado);
  } else {
    res.status(401);
    return next(new Error('Login e/ou senha errados'))
  }

})
