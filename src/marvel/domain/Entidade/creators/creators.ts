import { CreatorComicsDTO } from './ceatorComicsDTO';

export interface Creator {
    id: number; 
    nome: string;
    modificado: string;
    atorURL: string;
    imagem: string;
    quadrinhos: Array<CreatorComicsDTO>;
}