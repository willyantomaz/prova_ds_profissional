import { CharactersComicsDTO } from "./characterComicsDTO";

export interface Character {
    _id?: number;
    name: string;
    description: string;
    image: string;
    comics?: Array<CharactersComicsDTO>;
    favorite: boolean;
}
