import { Router } from 'express'
import eventController from './controller/eventController'
import creatorController from './controller/creatorController'
import characterController from './controller/characterController';




const routes = Router()
        routes.post('/event',eventController.createEvent);
        routes.post('/creators',creatorController.creatCreator);       
        routes.get('/character', characterController.findCharacter);
        routes.post('/create', characterController.findAndSaveCharacter)
export {
    routes
}

