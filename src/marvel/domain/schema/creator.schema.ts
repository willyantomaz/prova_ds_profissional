import { Schema, model } from "mongoose";

export const CreatorSchema = new Schema({
        _id: { type: Number },
        nome: { type: String },
        modificado: { type: String },
        atorURL: { type: String },
        imagem: { type: String },
        quadrinhos: {
                type: Array,
                items: {
                        hq: {
                          type: "object",
                          properties: {
                                 id: "number",
                                 title: "string",                                 
                                }
                        }
                }
        }

});

export default model('Creator', CreatorSchema);