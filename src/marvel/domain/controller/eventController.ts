import { Request, Response } from "express";
import { EventService } from "../service/eventService";


class EventController {
<<<<<<< HEAD
    
    async createEvent(req: Request, res: Response) {
        try{
            const eventCreated = await new EventService().createEvent();
            return res.status(201).json(eventCreated); 
        }catch(e){
            console.error(e);
            res.status(500).json(e);
        }
    }
=======

>>>>>>> origin/gabriel
}

export default new EventController();