import { Router } from 'express'
import  eventController from './controller/eventController'
import  creatorController from './controller/creatorController'




const routes = Router()
        routes.post('/event',eventController.createEvent);
        routes.post('/creators',creatorController.creatCreator);
export {
    routes
}

