import { Router } from 'express'
import  eventController from './controller/eventController'


const routes = Router()
        routes.get('/event', eventController.finEvent)
export {
    routes
}

