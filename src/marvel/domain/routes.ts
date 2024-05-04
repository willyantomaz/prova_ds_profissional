import { Router } from 'express'
import eventController from './controller/eventController'
import creatorController from './controller/creatorController'
import characterController from './controller/characterController';
import comicsController from './controller/comicsController';

const routes = Router()
        routes.post('/event/populate', eventController.findAndCreateEvent);
        routes.post('/creators/populate', creatorController.findAndCreateCreator);

        routes.post('/character/populate', characterController.findAndSaveCharacter);        
        routes.post('/character/save', characterController.saveNewCharacter);
        routes.get('/character/findAll', characterController.findAllCharacter);
        routes.get('/character/findFavorite', characterController.findFavoriteCaracters)
        routes.get('/character/findById/:id', characterController.findCharacterById);
        routes.delete('/character/delete/:id', characterController.deleteCharacter);
        routes.put('/character/update/:id', characterController.updateCharacter);
        routes.put('/character/favorite/:id', characterController.favoriteCharacter);

        routes.post('/comics/populate', comicsController.findAndCreateComic);
        routes.post('/comics/save', comicsController.saveNewComic);
        routes.get('/comics/findAll', comicsController.findAllComics);
        routes.get('/comics/findById/:id', comicsController.findComicById);
        routes.delete('/comics/delete/:id', comicsController.deleteComic);
        routes.put('/comics/update/:id', comicsController.updateComic);

export {
    routes
}

