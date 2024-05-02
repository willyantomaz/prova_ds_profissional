import { CharactersComicsDTO } from "./characterComicsDTO";

export interface Character {
    id: number;
    title: string;
    description: string;
    comics: Array<CharactersComicsDTO>;
}
