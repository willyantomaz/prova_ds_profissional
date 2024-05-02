import creatorModel from '../schema/creator.schema'

export class CreatorService {

    async createCreator(){
       
        const response = await fetch("http://gateway.marvel.com/v1/public/events/248/creators?ts=1&apikey=7e976b6b1253c4e95653b7d83be28efe&hash=805bcb66afdc9e0448dd917b9982e90d")

        const data: any = await response.json();
                
        const creator = data.data.results;
   
        const createCreator =  creatorModel.create(creator);

        return createCreator;       
    }
}