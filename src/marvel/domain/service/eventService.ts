import eventModel from '../schema/event.schema';
import { response } from 'express';
import eventSchema from '../schema/event.schema';
import characterSchema from '../schema/character.schema';
import { Character } from '../Entidade/charaters/character';

export class EventService {

<<<<<<< HEAD
    async createEvent(){
       
        const response = await fetch("http://gateway.marvel.com/v1/public/events?ts=1&apikey=7e976b6b1253c4e95653b7d83be28efe&hash=805bcb66afdc9e0448dd917b9982e90d&name=Fall of the Mutants")

        const data: any = await response.json();
                
        const event = data.data.results[0];
   
        const createEvent =  eventModel.create(event);

        return createEvent;       
        
    }       
=======
>>>>>>> origin/gabriel
}



