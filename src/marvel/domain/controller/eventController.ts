import { Request, Response } from "express";
import { EventService } from "../service/eventService";


class EventController {
    async finEvent(req: Request, res: Response) {
        try{
            const event = await new EventService().findEvent();
            return res.status(200).json(event); 
        }catch(e){
            console.error(e);
            res.status(500).json(e)
        }
    }

    async createEvent(req: Request, res: Response) {
        try{
            const eventCreated = await new EventService().createEvent();
            return res.status(201).json(eventCreated); 
        }catch(e){
            console.error(e);
            res.status(500).json(e)
        }
    }
}

export default new EventController();