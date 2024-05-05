import eventModel from '../schema/event.schema';
import {response} from 'express';
import {Event} from '../Entidade/event/event';

export class EventService {
    

    async createEvent(){
       
        const response = await fetch("http://gateway.marvel.com/v1/public/events?ts=1&apikey=7e976b6b1253c4e95653b7d83be28efe&hash=805bcb66afdc9e0448dd917b9982e90d&name=Fall of the Mutants")
        const data: any = await response.json();
        let eventResult = data.data.results[0];
        
        let eventMap: Event = {
            _id: eventResult.id,
            titulo: eventResult.title,
            modificado: eventResult.modified,
            descricao: eventResult.description,
            inicio: eventResult.start,
            fim: eventResult.end,
            sagaURL: eventResult.resourceURI,
            imagem: eventResult.thumbnail.path + '.' + eventResult.thumbnail.extension
        }
   
        const createEvent =  eventModel.create(eventMap);

        return createEvent;       
        
    }   
    
    async findEvent(){
        const event = await eventModel.find();
        return event;
    }

    async updateEvent(id: String, usuario: Event){
        const updateEvent = await eventModel.findByIdAndUpdate(id, usuario, {new: true});
        return updateEvent;
    }

    async deleteEvent(id: String) {
        const deleteEvent = await eventModel.findByIdAndDelete(id);
        return deleteEvent;
    }

    
}



