// Generated by https://quicktype.io

export interface MisUsuariosResp {
  ok: boolean;
  total: number;
  usuariosPagados: UsuariosPagado[];
}

export interface UsuariosPagado {
  usuario: string | undefined | null;
  apellido: string;
  nombre: string;
  correo: string;
  password: string;
  expireAt: string;
  uid?: string;
  createdAt: string;
}

export interface CrearUsuarioResp {
  ok: boolean;
  msg: string;
  usuarioPagado: UsuariosPagado;
}
