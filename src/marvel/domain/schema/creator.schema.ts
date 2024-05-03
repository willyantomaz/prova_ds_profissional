import { Schema,model } from "mongoose";

export const CreatorSchema = new Schema({
        id: { type: Number },
        nome: { type: String},
        modificado: { type: String},
        atorURL: { type: String},
        imagem: {type: String}

});

export default model('Creator',CreatorSchema);