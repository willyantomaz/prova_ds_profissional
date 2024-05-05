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

    async saveNewComic(req: Request, res: Response) {
        try{
            const event = await new ComicsService().saveNewComic(req.body)
            return res.status(200).json(event); 
        }catch(e){
            console.error(e);
            res.status(500).json(e)
        }
    }

    async updateComic(req: Request, res: Response) {
        try{
            const event = await new ComicsService().updateComic(req.params.id, req.body)
            return res.status(200).json(event); 
        }catch(e){
            console.error(e);
            res.status(500).json(e)
        }
    }

    async deleteComic(req: Request, res: Response) {
        try{
            const event = await new ComicsService().deleteComicById(req.params.id)
            return res.status(200).json(event); 
        }catch(e){
            console.error(e);
            res.status(500).json(e)
        }
    }
    
    async findAllComics(req: Request, res: Response) {
        try{
            const event = await new ComicsService().findAllComics()
            return res.status(200).json(event); 
        }catch(e){
            console.error(e);
            res.status(500).json(e)
        }
    }

    async findComicById(req: Request, res: Response) {
        try{
            const event = await new ComicsService().findComicById(req.params.id)
            return res.status(200).json(event); 
        }catch(e){
            console.error(e);
            res.status(500).json(e)
        }
    }

    async findComicsByCreator(req: Request, res: Response) {
        try{
            const event = await new ComicsService().findComicByCreator(req.params.name)
            return res.status(200).json(event); 
        }catch(e){
            console.error(e);
            res.status(500).json(e)
        }
    }
    
    async mostExpensiveComics(req: Request, res: Response) {
        try{
            const event = await new ComicsService().mostExpensiveComics()
            return res.status(200).json(event); 
        }catch(e){
            console.error(e);
            res.status(500).json(e)
        }
    }
}

export default new ComicController();