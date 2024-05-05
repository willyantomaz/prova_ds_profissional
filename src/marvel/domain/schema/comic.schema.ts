import { Schema, model } from "mongoose";

export const ComicSchema = new Schema({          
    _id: {type: "number"},
    title:{type: "string"},    
    description: {type: "string"},
    releaseDate: {type: "string"},
    digitalPurchasePrice: {type: "number"},
    cover: {type: "string"},
    characters: {
        type: "array",
        items: {
            character: {
                type: "object",
                properties: {
                    id: "number",
                    name: "string"
                }
            }
        }
    },
    creators: {
        type: "object",
        properties: {
            id: "number",
            name: "string",
            role: "string"
        }
    }
})

export default model('Comic', ComicSchema);        