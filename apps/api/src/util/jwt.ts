import { IUsuario, IUsuarioJwt, IUsuarioSemSenha } from "@nx-monorepo/comum";
import { sanitizarUsuario } from "./sanitizacao";
import * as jsonWebToken from 'jsonwebtoken';
import { expressjwt } from "express-jwt";
import { NextFunction, Request, Response, Router } from "express";

const SENHA_SECRETA = 'senha';

export function criarToken(iUsuario: IUsuario): string {
  return jsonWebToken.sign(
    sanitizarUsuario(iUsuario),
    SENHA_SECRETA,
    {
      expiresIn: '10m',
    }
  )
}

export const verificarTokenJwt = expressjwt({
  secret: SENHA_SECRETA,
  algorithms: ['HS256']
})

export type AuthorizedRequest = Request<IUsuarioJwt>;
