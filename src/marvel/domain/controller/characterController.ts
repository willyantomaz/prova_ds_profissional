import { Request, Response } from "express";
import { CharacterService } from "../service/characterService";



class CharacterController {
    async findCharacter(req: Request, res: Response) {
        try{
            const event = await new CharacterService().findCharacters()
            return res.status(200).json(event); 
        }catch(e){
            console.error(e);
            res.status(500).json(e)
        }
    }

    async findAndSaveCharacter(req: Request, res: Response) {
        try{
            const eventCreated = await new CharacterService().createCharacters();
            return res.status(201).json(eventCreated); 
        }catch(e){
            console.error(e);
            res.status(500).json(e)
        }
    }
}

export default new CharacterController();