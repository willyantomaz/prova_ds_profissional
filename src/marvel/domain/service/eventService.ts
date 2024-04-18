import eventModel from '../schema/event.schema';

export class EventService {

    async findEvent(){
        const event = await eventModel.find();
        return event;
    }
    
    async createEvent(event: Event){
        const eventCreated = await eventModel.create(event);
        return eventCreated;
    }



}