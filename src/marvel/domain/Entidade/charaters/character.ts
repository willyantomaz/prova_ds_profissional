import { CharactersComicsDTO } from "./characterComicsDTO";

export interface Character {
    id: number;
    name: string;
    description: string;
    comics: Array<CharactersComicsDTO>;
}
