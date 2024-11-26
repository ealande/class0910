import { JwtPayload } from 'jsonwebtoken'

export interface IUsuario {
  _id: number;

  login: string;

  nome: string;

  senha: string;

  administrador: boolean;

}

export type IUsuarioESenha = Pick<IUsuario, 'login' | 'senha'>;

export type IUsuarioSemSenha = Omit<IUsuario, 'senha'>;

export type IUsuarioJwt = IUsuarioSemSenha & JwtPayload;

export type iUsuarioLogado = {
  jwt: string;

  usuario: IUsuarioSemSenha;
}
