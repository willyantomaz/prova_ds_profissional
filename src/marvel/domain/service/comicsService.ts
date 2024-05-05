import axios from "axios";
import { Comic } from "../Entidade/comics/comics";
import comicSchema from "../schema/comic.schema";
import { CharacterDTO } from "../Entidade/comics/characterDTO";
import { CharacterService } from "./characterService";
import { Price } from "../Entidade/comics/priceComicDTO";
import { DateDTO } from "../Entidade/comics/dateComicDTO";

export class ComicsService {
    
    private async genericSearch(url: string) {
        return await axios.get(url + "?ts=1&apikey=7e976b6b1253c4e95653b7d83be28efe&hash=805bcb66afdc9e0448dd917b9982e90d&events=248&limit=42");
    }

    public async findComics(){
        const response = await this.genericSearch("http://gateway.marvel.com/v1/public/comics");
        const data = await response;
        const comics = data.data.data.results;            
                                                
        return comics;
    }

    public async createComics(): Promise<Array<Comic>>{       
        const response = this.findComics();             
        const comicsList: Array<any> = await response; 
        let mappedComicsList: Array<Comic> = [];
        await comicsList.forEach(async (comic) => {
            let mappedComic: Comic = await this.mapComicToSave(comic)
            mappedComicsList.push(mappedComic)
            try {                            
                comicSchema.create(mappedComic);                                           
            } catch (error) {
                console.log(error);
            }
        })
        return mappedComicsList;                             
    }

    private async mapComicToSave(responseComic: any): Promise<Comic> {
        let comicToSave: Comic = {
            id: responseComic.id,
            title: responseComic.name,
            description: responseComic.description,            
            releaseDate: responseComic.dates.filter((date: DateDTO) => date.type === 'onsaleDate').map((date: DateDTO) => date.date)[0],
            digitalPurchasePrice: responseComic.prices.filter((price: Price) => price.type == 'printPrice' && price.price != 0 || price.price != 0).map((price: Price) => price.price)[0],
            cover: responseComic.thumbnail.path + "." + responseComic.thumbnail.extension,             
            characters: this.mapCharacterDTO(responseComic.characters.items),
            creators: await new CharacterService().mapCreators(responseComic.creators.items)
        }        
        return comicToSave;
    }
    
    private mapCharacterDTO(charactersList: Array<any>): Array<CharacterDTO> {
        let characterComicsList: Array<CharacterDTO> = [];                
        charactersList.forEach(character => {
            const id = character.resourceURI.split('/').slice(-1);
            let characterComicsDTO: CharacterDTO = {                
                id: id[0],
                name: character.name,
            }
            characterComicsList.push(characterComicsDTO);
        })        
        return characterComicsList;
    }   
    
    public async findAllComics() {
        try{
            const foundComics: Array<Comic> = await comicSchema.find();
            return foundComics;
        }catch (e) {
            console.log(e)
        }        
    }
    
    public async findComicById(search: string) {
        try{
            const foundComic = await comicSchema.findById(search);
            return foundComic;
        }catch(e) {
            console.log(e)
        }        
    }
    
    public async deleteComicById(id: string): Promise<void> {
        try{
            await comicSchema.findByIdAndDelete(id);
        }catch(e) {
            console.log(e)
        }
    }
    
    public async updateComic(id: string, updatedComic: Comic) {
        try {
            const comicUpdating = await comicSchema.findByIdAndUpdate(id, updatedComic, {new: true});        
            return comicUpdating;
        } catch(e) {
            console.log(e)
        }
    }
    
    public async saveNewComic(newComic: Comic) {
        try {            
            const comic = await comicSchema.create(newComic);
            return comic;            
        } catch(e) {
            console.log(e)
        }
    }
}