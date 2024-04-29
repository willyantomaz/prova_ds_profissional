import { Schema, model } from 'mongoose';

export const EventeSchema = new Schema({
   id: { type: Number },
   title: { type: String, alias: 'titulo'},
   description: { type: String, alias: 'descricao'},
   resourceURI: { type: String, alias: 'uri'},
   modified: { type: String, alias: 'modificado'},
   start: { type: String, alias: 'inicio'},
   end: { type: String, alias: 'fim'},
   thumbnail: {
      path: { type: String },
      extension: { type: String }
   },
   creators: {
      available: { type: Number },
      collectionURI: { type: String },
   },
   characters: {
      available:  { type: Number },
      collectionURI: { type: String },
   },
   stories: {
      available:  { type: Number },
      collectionURI: { type: String },
   },
   comics: {
      available:  { type: Number },
      collectionURI: { type: String },
   },
   series: {
      available: { type: Number },
      collectionURI: { type: String },
   },
});


export default model('Event', EventeSchema);
