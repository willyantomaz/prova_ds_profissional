import creatorModel from '../schema/creator.schema'
import {Creator} from '../Entidade/creators/creators'

export class CreatorService {

    public async createCreator(){
       
        const response = await fetch("http://gateway.marvel.com/v1/public/events/248/creators?ts=1&apikey=7e976b6b1253c4e95653b7d83be28efe&hash=805bcb66afdc9e0448dd917b9982e90d")

        const data: any = await response.json();
        let createCreator: Array<Creator> = [];       
        let creatorResult = data.data.results;

        creatorResult.forEach(async (creator: any) => {
            let cratorMap: Creator = {
                id: creator.id,
                nome: creator.fullName,
                modificado: creator.modified,
                resourceURI: creator.resourceURI,
                //imagem: creatorResult.thumbnail.path + '.' + creatorResult.thumbnail.extension,
            }
            createCreator.push(cratorMap);
            creatorModel.create(createCreator);
            console.log(cratorMap)
            console.log(creatorResult)

        });
        return createCreator;       


        
   
        



    }
}