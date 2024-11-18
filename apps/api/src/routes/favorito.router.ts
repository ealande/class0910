import { NextFunction, Request, Response, Router } from "express";
import { getCollection } from "../util/get-collection";
import { IFavorito } from "@nx-monorepo/comum";

export const favoritoRouter = Router();

favoritoRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {

  const collection = getCollection<IFavorito>(req.app, 'favoritos');
  const favoritos = await collection.find().toArray();
  res.json(favoritos);

});
