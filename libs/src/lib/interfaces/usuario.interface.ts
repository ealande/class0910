export interface IUsuario {
  _id: number;

  login: string;

  nome: string;

  senha: string;

  administrador: boolean;

}

export type IUsuarioESenha = Pick<IUsuario, 'login' | 'senha'>;

export type iUsuarioLogado = {

  usuario: IUsuario;
}
