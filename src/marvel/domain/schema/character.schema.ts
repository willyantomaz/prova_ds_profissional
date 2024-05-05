import { Schema, model } from "mongoose";
import { Character } from "../Entidade/charaters/character";

export const CharacterSchema = new Schema<Character>({          
    _id: {type: "number", required: true},
    name:{type: "string"},
    description: {type: "string"},
    image: {type: "string"},
    comics: { 
        type: "array",
        items: {
            hq:{
                type: "object",
                properties: {
                    id: "number",
                    title: "string",
                    creators: {
                        type: "object",
                        properties: {
                            id: "number",
                            name: "string"
                        }
                    }
                }
            }
        }              
    },
    favorite: {type: "boolean",}
})

export default model('Character', CharacterSchema);        