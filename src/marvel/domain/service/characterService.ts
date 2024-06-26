import axios from 'axios';
import characterSchema from '../schema/character.schema';
import { Character } from '../Entidade/charaters/character';
import { CharactersComicsDTO } from '../Entidade/charaters/characterComicsDTO';
import { CharacterComicsCreatorsDTO } from '../Entidade/charaters/characterComicsCreatorDTO';

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
        const charactersList: Array<any> = await response; 
        let mappedCharacterList: Array<Character> = [];
        await charactersList.forEach(async (character) => {
            let mappedCharacter: Character = await this.mapCharacterToSave(character);
            mappedCharacterList.push(mappedCharacter);
            try {
                characterSchema.create(mappedCharacter);
            } catch (error) {
                console.log(error);
            }
        })
        return mappedCharacterList;                     
    }

    private async mapCharacterToSave(responseCharacter: any): Promise<Character> {
        let characterToSave: Character = {
            _id: responseCharacter.id,
            name: responseCharacter.name,
            description: responseCharacter.description,
            image: responseCharacter.thumbnail.path + "." + responseCharacter.thumbnail.extension, 
            comics: await this.mapCharacterComics(responseCharacter.comics.collectionURI),
            favorite: false
        }        
        return characterToSave;
    }

    private async mapCharacterComics(url: string): Promise<Array<CharactersComicsDTO>> {
        let characterComicsList: Array<CharactersComicsDTO> = [];
        const response = await this.genericSearch(url);
        let responseComicList: Array<any> = response.data.data.results;
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

    public mapCreators(responseCreatorsList: Array<any>): Array<CharacterComicsCreatorsDTO> {
        let creatorsList: Array<CharacterComicsCreatorsDTO> = [];
        responseCreatorsList.forEach(creator => {
            const id = creator.resourceURI.split('/').slice(-1);
            let characterComicsCreatorDTO: CharacterComicsCreatorsDTO = {
                id: id[0],
                name: creator.name,
                role: creator.role
            }
            creatorsList.push(characterComicsCreatorDTO);
        })
        return creatorsList;
    }

    public async findAllCharacter() {
        try{            
            const foundCharacters: Array<Character> = await characterSchema.find();
            return foundCharacters;
        }catch (e) {
            console.log(e)
        }        
    }

    public async findCharacterById(search: string) {
        try{
            const foundCharacter = await characterSchema.findById(search);
            return foundCharacter;
        }catch(e) {
            console.log(e)
        }        
    }

    public async deleteCharacterById(id: string): Promise<void> {
        try{
            await characterSchema.findByIdAndDelete(id);
        }catch(e) {
            console.log(e)
        }
    }

    public async updateCharacter(id: string, updatedCharacter?: Character) {
        try {
            const characterUpdating = await characterSchema.findByIdAndUpdate(id, updatedCharacter, {new: true});        
            return characterUpdating;
        } catch(e) {
            console.log(e)
        }
    }

    public async saveNewCharacter(newCharacter: Character) {
        try {    
            const character = await characterSchema.create(newCharacter);
            return character;            
        } catch(e) {
            console.log(e)
        }
    }

    public async favoriteCharacter(id: string) {
        try {
            const characterToFavorite = await characterSchema.findById(id)        
            if(characterToFavorite) {
                characterToFavorite.favorite = !characterToFavorite.favorite
                return await characterSchema.findByIdAndUpdate(id, characterToFavorite, {new: true})                
            }    
        }catch (e) {
            console.log(e)
        }
    }

    public async findFavoriteCharacter() {
        try {
            return await characterSchema.find({favorite: true})
        }catch (e) {
            console.log(e)
        }
    }
}