import { Router } from 'express'
import  eventController from './controller/eventController'
import characterController from './controller/characterController';


const routes = Router()
        // routes.get('/event', eventController.finEvent);
        // routes.post('/puxa',eventController.createEvent);
        routes.get('/character', characterController.findCharacter);
        routes.post('/create', characterController.findAndSaveCharacter)
export {
    routes
}

