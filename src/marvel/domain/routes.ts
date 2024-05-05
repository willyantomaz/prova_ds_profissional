import { Router } from 'express'
import eventController from './controller/eventController'
import creatorController from './controller/creatorController'
import characterController from './controller/characterController';




const routes = Router()
        routes.post('/event/populate',eventController.createEvent);
        routes.get('/event', eventController.findEvent);
        routes.put('/event/atualiza/:id', eventController.updateEvent);
        routes.delete('/event/delete/:id', eventController.deleteEvent);

        
        routes.post('/creators/populate',creatorController.creatPopulate); 
        routes.get('/creators', creatorController.findCreator);
        routes.post('/creators/create', creatorController.createCriador);   
        routes.get('/creators/findById/:id', creatorController.findCreatorById);
        routes.put('/creators/atualiza/:id', creatorController.updateCreator);
        routes.delete('/creators/delete/:id', creatorController.deleteCreator);


        routes.get('/character', characterController.findCharacter);
        routes.post('/create', characterController.findAndSaveCharacter);
export {
    routes
}

