import { Schema, model } from 'mongoose';

export const EventeSchema = new Schema({
   id: { type: Number },
   titulo: { type: String},
   descricao: { type: String},
   sagaURL: { type: String},
   modificado: { type: String},
   inicio: { type: String},
   fim: { type: String},
   imagem: {type: String}
});


export default model('Event', EventeSchema);
