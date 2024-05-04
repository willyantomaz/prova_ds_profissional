import creatorModel from '../schema/creator.schema'
import {Creator} from '../Entidade/creators/creators'

export class CreatorService {

    public async createCreator(){
       
        const response = await fetch("http://gateway.marvel.com/v1/public/events/248/creators?ts=1&apikey=7e976b6b1253c4e95653b7d83be28efe&hash=805bcb66afdc9e0448dd917b9982e90d&limit=100")

        const data: any = await response.json();
        let createCreator: Array<Creator> = [];       
        let creatorResult = data.data.results;    
        await creatorResult.forEach(async (creator: any) => {
            let creatorMap: Creator = {
                id: creator.id,
                nome: creator.fullName,
                modificado: creator.modified,
                atorURL: creator.resourceURI,
                imagem: creator.thumbnail.path + '.' + creator.thumbnail.extension,
            }
            createCreator.push(creatorMap);
            creatorModel.create(creatorMap);            
        });
        return createCreator;       
    }
}