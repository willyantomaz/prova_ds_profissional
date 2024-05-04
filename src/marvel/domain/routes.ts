import { Router } from 'express'
import eventController from './controller/eventController'
import creatorController from './controller/creatorController'
import characterController from './controller/characterController';
import comicController from './controller/comicController';

const routes = Router()
        routes.post('/event/populate', eventController.findAndCreateEvent);
        routes.post('/creators/populate', creatorController.findAndCreateCreator);       
        routes.post('/character/populate', characterController.findAndSaveCharacter);        
        routes.post('/comics/populate', comicController.findAndCreateComic)
export {
    routes
}

