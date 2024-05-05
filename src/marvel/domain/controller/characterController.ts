import { Request, Response } from "express";
import { CharacterService } from "../service/characterService";

class CharacterController {
    async findAndSaveCharacter(req: Request, res: Response) {
        try{
            const eventCreated = await new CharacterService().createCharacters();
            return res.status(201).json(eventCreated); 
        }catch(e){
            console.error(e);
            res.status(500).json(e)
        }
    }

    async saveNewCharacter(req: Request, res: Response) {
        try{
            const event = await new CharacterService().saveNewCharacter(req.body)
            return res.status(200).json(event); 
        }catch(e){
            console.error(e);
            res.status(500).json(e)
        }
    }

    async updateCharacter(req: Request, res: Response) {
        try{
            const event = await new CharacterService().updateCharacter(req.params.id, req.body)
            return res.status(200).json(event); 
        }catch(e){
            console.error(e);
            res.status(500).json(e)
        }
    }

    async deleteCharacter(req: Request, res: Response) {
        try{
            const event = await new CharacterService().deleteCharacterById(req.params.id)
            return res.status(200).json(event); 
        }catch(e){
            console.error(e);
            res.status(500).json(e)
        }
    }
    
    async findAllCharacter(req: Request, res: Response) {
        try{
            const event = await new CharacterService().findAllCharacter()
            return res.status(200).json(event); 
        }catch(e){
            console.error(e);
            res.status(500).json(e)
        }
    }

    async findCharacterById(req: Request, res: Response) {
        try{
            const event = await new CharacterService().findCharacterById(req.params.id)
            return res.status(200).json(event); 
        }catch(e){
            console.error(e);
            res.status(500).json(e)
        }
    }

    async favoriteCharacter(req: Request, res: Response) {
        try{
            const event = await new CharacterService().favoriteCharacter(req.params.id)
            return res.status(200).json(event); 
        }catch(e){
            console.error(e);
            res.status(500).json(e)
        }
    }

    async findFavoriteCaracters(req: Request, res: Response) {
        try{
            const event = await new CharacterService().findFavoriteCharacter()
            return res.status(200).json(event); 
        }catch(e){
            console.error(e);
            res.status(500).json(e)
        }
    }
}

export default new CharacterController();