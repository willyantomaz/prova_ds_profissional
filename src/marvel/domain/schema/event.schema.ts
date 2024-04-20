import {Schema, model} from 'mongoose';	

export const EventeSchema = new Schema({
    type: "object",
    properties: {
        code: { type: "number" },
        status: { type: "string" },
        copyright: { type: "string" },
        attributionText: { type: "string" },
        attributionHTML: { type: "string" },
        etag: { type: "string" },
        data: {
            type: "object",
            properties: {
                offset: { type: "number" },
                limit: { type: "number" },
                total: { type: "number" },
                count: { type: "number" },
                results: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            id: { type: "number" },
                            title: { type: "string" },
                            description: { type: "string" },
                            resourceURI: { type: "string" },
                            urls: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        type: { type: "string" },
                                        url: { type: "string" }
                                    },
                                    
                                }
                            },
                            modified: { type: "string", format: "date-time" },
                            start: { type: "string", format: "date-time" },
                            end: { type: "string", format: "date-time" },
                            thumbnail: {
                                type: "object",
                                properties: {
                                    path: { type: "string" },
                                    extension: { type: "string" }
                                },
                                
                            },
                            creators: {
                                type: "object",
                                properties: {
                                    available: { type: "number" },
                                    collectionURI: { type: "string" },
                                    items: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                resourceURI: { type: "string" },
                                                name: { type: "string" },
                                                role: { type: "string" }
                                            },
                                            
                                        }
                                    },
                                    returned: { type: "number" }
                                },
                               
                            },
                            characters: {
                                type: "object",
                                properties: {
                                    available: { type: "number" },
                                    collectionURI: { type: "string" },
                                    items: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                resourceURI: { type: "string" },
                                                name: { type: "string" }
                                            },
                                            
                                        }
                                    },
                                    returned: { type: "number" }
                                },
                                
                            },
                            stories: {
                                type: "object",
                                properties: {
                                    available: { type: "number" },
                                    collectionURI: { type: "string" },
                                    items: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                resourceURI: { type: "string" },
                                                name: { type: "string" },
                                                type: { type: "string" }
                                            },
                                            
                                        }
                                    },
                                    returned: { type: "number" }
                                },
                                
                            },
                            comics: {
                                type: "object",
                                properties: {
                                    available: { type: "number" },
                                    collectionURI: { type: "string" },
                                    items: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                resourceURI: { type: "string" },
                                                name: { type: "string" }
                                            },
                                        
                                        }
                                    },
                                    returned: { type: "number" }
                                },
                                
                            },
                            series: {
                                type: "object",
                                properties: {
                                    available: { type: "number" },
                                    collectionURI: { type: "string" },
                                    items: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                resourceURI: { type: "string" },
                                                name: { type: "string" }
                                            },
                                            
                                        }
                                    },
                                    returned: { type: "number" }
                                },
                               
                            },
                            next: {
                                type: "object",
                                properties: {
                                    resourceURI: { type: "string" },
                                    name: { type: "string" }
                                },
                                
                            },
                            previous: {
                                type: "object",
                                properties: {
                                    resourceURI: { type: "string" },
                                    name: { type: "string" }
                                },
                               
                            }
                        },
                       
                    }
                }
            },
           
        }
    },
    
})

export default model('Event', EventeSchema);
