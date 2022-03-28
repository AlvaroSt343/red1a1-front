// Generated by https://quicktype.io

export interface InmueblesResponse {
  ok: boolean;
  msg: string;
  inmueble: Inmueble;
}

export interface AllInmuebles {
  ok: boolean;
  total: number;
  inmuebles: Inmueble[];
}

export interface Inmueble {
  _id: string;
  titulo: string;
  slug: string;
  categoria: string;
  precio: number;
  direccion: string | undefined;
  publicado?: boolean;
  usuario?: Usuario;
  descripcion?: string;
  AA?: boolean;
  agua?: boolean;
  amueblado?: boolean;
  antiguedad?: string;
  baños?: number;
  camas?: boolean;
  closet?: boolean;
  cocina?: boolean;
  comedor?: boolean;
  comisiones?: number;
  discapacitados?: boolean;
  escuelas?: boolean;
  estufa?: boolean;
  gas?: boolean;
  habitaciones?: number;
  horno?: boolean;
  internet?: boolean;
  lavadora?: boolean;
  luz?: boolean;
  m2Construidos?: number;
  m2Terreno?: number;
  mantenimiento?: boolean;
  medioBaños?: number;
  microondas?: boolean;
  minihorno?: boolean;
  otros?: string;
  parking?: number;
  piscinas?: boolean;
  pisos?: number;
  propertyType?: string;
  refrigerador?: boolean;
  sala?: boolean;
  secadora?: boolean;
  seguridadPrivada?: boolean;
  imgs: string[];
}

export interface Categoria {
  _id: string;
  nombre: string;
}

export interface Usuario {
  _id: string;
  nombre: string;
  apellido: string;
  correo: string;
}

export interface CategoriesResponse {
  ok: boolean;
  total: number;
  categorias: Categoria[];
}

// Generated by https://quicktype.io

export interface SubirImagenesInmueble {
  ok: boolean;
  msg: string;
  imgs: string[];
  files: string[];
}