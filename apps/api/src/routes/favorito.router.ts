import { NextFunction, Request, Response, Router } from "express";
import { getCollection } from "../util/get-collection";
import { IFavorito } from "@nx-monorepo/comum";
import { InsertOneResult, WithId, WithoutId } from "mongodb";
import { AuthorizedRequest, verificarTokenJwt } from "../util/jwt";

export const favoritoRouter = Router();


favoritoRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {

  const collection = getCollection<IFavorito>(req.app, 'favoritos');
  const favoritos = await collection.find().toArray();
  res.json(favoritos);

});

favoritoRouter.get('/:_id', verificarTokenJwt, async (req: AuthorizedRequest, res: Response, next: NextFunction) => {
  const _id: number = +req.params._id;
  const favorito: IFavorito = await getCollection<IFavorito>(
    req.app,
    'favoritos',
  ).findOne({ _id });
  res.json(favorito);

}),


favoritoRouter.put('/:_id', verificarTokenJwt, async (req: AuthorizedRequest, res: Response, next: NextFunction) => {
  const _id: number = +req.params._id;
  const body: IFavorito = req.body;
  const results: WithId <IFavorito> = await getCollection<IFavorito>(
    req.app,
    'favoritos',
  ).findOneAndReplace({ _id }, body);
  if(results) {
  res.json(body);
  } else {
    return next(`Favorito com ID ${_id} não encontrado!`);
  }

}),

favoritoRouter.post('/:_id', verificarTokenJwt, async (req: AuthorizedRequest, res: Response, next: NextFunction) => {
  const body: WithoutId<IFavorito> = req.body;

  const buscaMaxId = await getCollection<IFavorito>(
    req.app,
    'favoritos'
  ).find().sort({_id: -1}).limit(1).toArray();

  const novoId = (!buscaMaxId || buscaMaxId.length < 1) ? 1 : buscaMaxId[0]._id + 1;

  const favorito: IFavorito = {
    ...body,
    _id: novoId,
  }

  const results: InsertOneResult<IFavorito> = await getCollection<IFavorito>(
    req.app,
    'favoritos',
  ).insertOne(favorito);
  if(results.acknowledged) {
  res.json(favorito);
  } else {
    return next(`Não foi possivel inserir o novo favorito!`);
  }
}
);
