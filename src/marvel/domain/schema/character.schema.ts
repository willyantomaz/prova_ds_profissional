import { Schema, model } from "mongoose";

export const CharacterSchema = new Schema({          
    id: {
        type: "number",
        alias: "char_id"
    },
    name:{type: "string"},
    description: {type: "string"},
    comics: { 
        type: "array",
        items: {
            hq:{
                type: "object",
                properties: {
                    id: "number",
                    title: "string",
                    creators: "string"
                }
            }
        }              
    }
})

export default model('Character', CharacterSchema);        