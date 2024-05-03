import { CharacterComicsCreatorsDTO } from "./characterComicsCreatorDTO";

export interface CharactersComicsDTO {
    id: number;
    title: string;
    creators?: Array<CharacterComicsCreatorsDTO>
}
