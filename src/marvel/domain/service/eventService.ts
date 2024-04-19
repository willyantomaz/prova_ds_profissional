import eventModel from '../schema/event.schema';

export class EventService {

    async findEvent(){
        const event = await eventModel.find();
        return event;
    }
    
    async createEvent(){
        var event;
        await fetch("http://gateway.marvel.com/v1/public/events?ts=1&apikey=7e976b6b1253c4e95653b7d83be28efe&hash=805bcb66afdc9e0448dd917b9982e90d&name=Fall of the Mutants").then(
            (response) => response.json()).then((data) => {    
                console.log(data)
    
           event = data;
           console.log(data)
           console.log(event)
                //const eventMarvel = {
               //     id: data.data.id,
               //    titulo: data.data.title,
               //    description: data.description
        
      //  }
        }
    )  
        const eventCreated = await eventModel.create(event);
        return eventCreated;
    }



}