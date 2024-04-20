import axios from 'axios';
import eventModel from '../schema/event.schema';

export class EventService {

    async findEvent(){
        const response = await fetch("http://gateway.marvel.com/v1/public/events?ts=1&apikey=7e976b6b1253c4e95653b7d83be28efe&hash=805bcb66afdc9e0448dd917b9982e90d&name=Fall of the Mutants")
            const data: any = await response.json();
            
            const event = data.results.map((result: any) => ({
                id: result.id,
                title: result.title,
                description: result.description,
                resourceURI: result.resourceURI,
                urls: result.urls,
            }));

            
            
        
            return event;
    
    
    }
    
    async createEvent(){
       
        const response = await fetch("http://gateway.marvel.com/v1/public/events?ts=1&apikey=7e976b6b1253c4e95653b7d83be28efe&hash=805bcb66afdc9e0448dd917b9982e90d&name=Fall of the Mutants")
        

        const event = await response.json();

        const createEvent =  eventModel.create(event);
            console.log(event);

            
     
            return createEvent;

       
        

    }
       
        

}



