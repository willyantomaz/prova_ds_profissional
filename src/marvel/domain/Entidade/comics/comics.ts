import { CharacterComicsCreatorsDTO } from "../charaters/characterComicsCreatorDTO"
import { CharacterDTO } from "./characterDTO"

export interface Comic {
    id:  number;
    title: string;    
    description:  string;
    releaseDate:  string;
    digitalPurchasePrice:  number;
    cover:  string;
    characters: Array<CharacterDTO>;
    creators: Array<CharacterComicsCreatorsDTO>;
}