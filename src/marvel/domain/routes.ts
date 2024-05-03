import { Router } from 'express'
import  eventController from './controller/eventController'
<<<<<<< HEAD
import  creatorController from './controller/creatorController'




const routes = Router()
        routes.post('/event',eventController.createEvent);
        routes.post('/creators',creatorController.creatCreator);
=======
import characterController from './controller/characterController';


const routes = Router()
        // routes.get('/event', eventController.finEvent);
        // routes.post('/puxa',eventController.createEvent);
        routes.get('/character', characterController.findCharacter);
        routes.post('/create', characterController.findAndSaveCharacter)
>>>>>>> origin/gabriel
export {
    routes
}

