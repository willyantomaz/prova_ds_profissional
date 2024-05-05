import { Request, Response } from "express";
import { CreatorService } from "../service/creatorService";


class CreatorController {
    
    async findAndCreateCreator(req: Request, res: Response) {
        try{
            const creatorCreated = await new CreatorService().createPopulate();
            return res.status(201).json(creatorCreated); 
        }catch(e){
            console.error(e);
            res.status(500).json(e);
        }
    }

    async findCreator(req: Request, res: Response) {
        try{
            const creator = await new CreatorService().findCreator();
            return res.status(200).json(creator);
        }catch(e){
            console.error(e);
            res.status(500).json(e);
        }
    }

    async createCriador(req: Request, res: Response) {
        try{
            const criador = req.body;
            const criadorCreat = await new CreatorService().create(criador);
            return res.status(201).json(criadorCreat);
        }catch(e){
            console.error(e);
            res.status(500).json(e);
        }
    }

    async findCreatorById(req: Request, res: Response) {
        try{
            const id = req.params.id;
            const creator = await new CreatorService().findCreatorById(id);
            return res.status(200).json(creator);
        }catch(e){
            console.error(e);
            res.status(500).json(e);
        }
    }

    async updateCreator(req: Request, res: Response) {
        try{
            const id = req.params.id;
            const creator = req.body;
            const creatorUpdated = await new CreatorService().updateCreator(id, creator);
            return res.status(200).json(creatorUpdated);
        }catch(e){
            console.error(e);
            res.status(500).json(e);
        }
    }

    async deleteCreator(req: Request, res: Response) {
        try{
            const id = req.params.id;
            const creatorDeleted = await new CreatorService().deleteCreator(id);
            return res.status(200).json(creatorDeleted);
        }catch(e){
            console.error(e);
            res.status(500).json(e);
        }
    }

    async findCreatorByName(req: Request, res: Response) {
        try{
            const name = req.params.name;
            const creator = await new CreatorService().findByName(name);
            return res.status(200).json(creator);
        }catch(e){
            console.error(e);
            res.status(500).json(e);
        }
    }
}

export default new CreatorController();