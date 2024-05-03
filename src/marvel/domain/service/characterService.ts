import axios from 'axios';
import characterSchema from '../schema/character.schema';
import { Character } from '../Entidade/charaters/character';
import { CharactersComicsDTO } from '../Entidade/charaters/characterComicsDTO';
import { response } from 'express';

export class CharacterService {

    private async genericSearch(url: string) {
        return await axios.get(url + "?ts=1&apikey=7e976b6b1253c4e95653b7d83be28efe&hash=805bcb66afdc9e0448dd917b9982e90d&events=248&limit=42");
    }

    public async findCharacters(){
        const response = await this.genericSearch("http://gateway.marvel.com/v1/public/characters");
        const data = await response;
        const characters = data.data.data.results;            
                                                
        return characters;
    }
  
    public async createCharacters(){       
        const response = this.findCharacters();             
        const charactersList: Array<Character> = await response; 
        charactersList.forEach(async (character) => {
            let mappedCharacter: Character = await this.mapCharacterToSave(character)
            try {                            
                characterSchema.create(mappedCharacter);                                            
            } catch (error) {
                console.log(error);
            }
        })                     
    }

    private async mapCharacterToSave(responseCharacter: any): Promise<Character> {
        let characterToSave: Character = {
            id: responseCharacter.id,
            name: responseCharacter.name,
            description: responseCharacter.description,
            comics: await this.mapCharacterComics(responseCharacter.comics.collectionURI)
        }

        return characterToSave;
    }

    private async mapCharacterComics(url: string): Promise<Array<CharactersComicsDTO>> {
        let characterComicsList: Array<CharactersComicsDTO> = [];
        const response = await this.genericSearch(url);
        let responseComicList: Array<any> = response.data.results;
        responseComicList.forEach(comic => {
            let characterComicsDTO: CharactersComicsDTO = {
                id: comic.id,
                title: comic.title,
                creators: this.mapCreators(comic.creators.items)
            }
            characterComicsList.push(characterComicsDTO);
        })        
        return characterComicsList;
    }

    private mapCreators(responseCreatorsList: Array<any>): Array<string> {
        let creatorsList: Array<string> = []
        responseCreatorsList.forEach(creator => creatorsList.push(creator.name))
        return creatorsList;
    }
}