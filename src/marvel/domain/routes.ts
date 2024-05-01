import { Router } from 'express'
import  eventController from './controller/eventController'



const routes = Router()
        routes.post('/event',eventController.createEvent)
export {
    routes
}

