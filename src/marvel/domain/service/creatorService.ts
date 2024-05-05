import creatorModel from '../schema/creator.schema'
import {Creator} from '../Entidade/creators/creators'
import { CreatorComicsDTO } from '../Entidade/creators/ceatorComicsDTO';

export class CreatorService {

    private async genericSearch(url: string) {
        return await fetch(url + "?ts=1&apikey=7e976b6b1253c4e95653b7d83be28efe&hash=805bcb66afdc9e0448dd917b9982e90d&events=248&limit=100");
    }


    public async createPopulate(){
              
        const response = await this.genericSearch("http://gateway.marvel.com/v1/public/events/248/creators");
        const data: any = await response.json();
        let createCreator: Array<Creator> = [];       
        let creatorResult = data.data.results;

        creatorResult.forEach(async (creator: any) => {   

            let creatorMap: Creator = {
                _id: creator.id,
                nome: creator.fullName,
                modificado: creator.modified,
                atorURL: creator.resourceURI,
                imagem: creator.thumbnail.path + '.' + creator.thumbnail.extension,
                
                quadrinhos: await this.mapCharacterComics(creator.comics.collectionURI)
            }
            createCreator.push(creatorMap);
            creatorModel.create(creatorMap);            
        });
        return createCreator;       
    }
    private async mapCharacterComics(url: any): Promise<Array<CreatorComicsDTO>> {

        let hqs: Array<CreatorComicsDTO> = [];
        const response = await this.genericSearch(url);
        const data: any = await response.json();
        let responseComicList: Array<any> = data.data.results;

        responseComicList.forEach(async (comic: any) => {    
            let characterComicsDTO: CreatorComicsDTO = {
                id: comic.resourceURI.split('/').slice(-1),
                titulo: comic.title,
                hqURL: comic.resourceURI
            }
            hqs.push(characterComicsDTO);
        })        
        return hqs;
    }

    public async findCreator(){
        const creator = await creatorModel.find();
        return creator;
    }

    public async findCreatorById(id: String){
        const creator = await creatorModel.findById(id);
        return creator;
    }

    public async create(criador: Creator){
        const creator = await creatorModel.create(criador);
        return creator;
    }

    public async updateCreator(id: String, criador: Creator){
        const updateCreator = await creatorModel.findByIdAndUpdate(id, criador, {new: true});
        return updateCreator;
    }
    
    public async deleteCreator(id: String) {
        const deleteCreator = await creatorModel.findByIdAndDelete(id);
        return deleteCreator;
    }

    public async findByName(creatorName: string) {
        return await creatorModel.find({nome: creatorName})
    }
}