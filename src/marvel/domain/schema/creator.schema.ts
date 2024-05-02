import { Schema,model } from "mongoose";

export const CreatorSchema = new Schema({
        id: { type: Number },
        firstName: { type: String, alias: 'primeiroNome'},
        middleName: { type: String, alias: 'nomeDoMeio'},
        lastName: { type: String, alias: 'ultimoNome'},
        suffix: { type: String, alias: 'sufixo'},
        fullName: { type: String, alias: 'nomeCompleto'},
        modified: { type: String, alias: 'modificado'},
        resourceURI: { type: String, alias: 'uri'},
        thumbnail: {
            path: { type: String },
            extension: { type: String }
        },

});

export default model('Creator',CreatorSchema);