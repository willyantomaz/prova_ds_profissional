import { Request, Response } from "express";
import { EventService } from "../service/eventService";


class EventController {
    
    async findAndCreateEvent(req: Request, res: Response) {
        try{
            const eventCreated = await new EventService().createEvent();
            return res.status(201).json(eventCreated); 
        }catch(e){
            console.error(e);
            res.status(500).json(e);
        }
    }

    async findEvent(req: Request, res: Response) {
        try{
            const event = await new EventService().findEvent();
            return res.status(200).json(event);
        }catch(e){
            console.error(e);
            res.status(500).json(e);
        }
    }

    async updateEvent(req: Request, res: Response) {
        try{
            const id = req.params.id;
            const event = req.body;
            const eventUpdated = await new EventService().updateEvent(id, event);
            return res.status(200).json(eventUpdated);
        }catch(e){
            console.error(e);
            res.status(500).json(e);
        }
    }

    async deleteEvent(req: Request, res: Response) {
        try{
            const id = req.params.id;
            const eventDeleted = await new EventService().deleteEvent(id);
            return res.status(200).json(eventDeleted);
        }catch(e){
            console.error(e);
            res.status(500).json(e);
        }
    }
}

export default new EventController();