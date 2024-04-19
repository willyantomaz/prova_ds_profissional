import { Router } from 'express'
import  eventController from './controller/eventController'


const routes = Router()
        routes.get('/event', eventController.finEvent)
        routes.post('/puxa',eventController.createEvent)
export {
    routes
}

