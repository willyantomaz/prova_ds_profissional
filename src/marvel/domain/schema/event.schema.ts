import { Schema, model } from 'mongoose';

export const EventeSchema = new Schema({
   id: { type: Number },
   title: { type: String },
   description: { type: String },
   resourceURI: { type: String },
   modified: { type: String },
   start: { type: String },
   end: { type: String },
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
