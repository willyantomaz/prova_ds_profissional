import { ComicsService } from "../service/comicsService";
import { Request, Response } from "express";

class ComicController{
    async findAndCreateComic(req: Request, res: Response) {
        try{
            const eventCreated = await new ComicsService().createComics();
            return res.status(201).json(eventCreated); 
        }catch(e){
            console.error(e);
            res.status(500).json(e)
        }
    }
}

export default new ComicController();