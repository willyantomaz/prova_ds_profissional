import { Request, Response } from "express";
import { CreatorService } from "../service/creatorService";


class CreatorController {
    
    async creatCreator(req: Request, res: Response) {
        try{
            const creatorCreated = await new CreatorService().createCreator();
            return res.status(201).json(creatorCreated); 
        }catch(e){
            console.error(e);
            res.status(500).json(e);
        }
    }
}

export default new CreatorController();