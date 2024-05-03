import { CharactersComicsDTO } from "./characterComicsDTO";

export interface Character {
    id: number;
    name: string;
    description: string;
    image?: string
    comics: Array<CharactersComicsDTO>;
}
