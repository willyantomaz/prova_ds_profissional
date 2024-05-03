import { Schema,model } from "mongoose";

export const CreatorSchema = new Schema({
        id: { type: Number },
        nome: { type: String},
        modificado: { type: String},
        resourceURI: { type: String},
        //Image: {type: String}

});

export default model('Creator',CreatorSchema);