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
                                    required: ["type", "url"]
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
                                required: ["path", "extension"]
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
                                            required: ["resourceURI", "name", "role"]
                                        }
                                    },
                                    returned: { type: "number" }
                                },
                                required: ["available", "collectionURI", "items", "returned"]
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
                                            required: ["resourceURI", "name"]
                                        }
                                    },
                                    returned: { type: "number" }
                                },
                                required: ["available", "collectionURI", "items", "returned"]
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
                                            required: ["resourceURI", "name", "type"]
                                        }
                                    },
                                    returned: { type: "number" }
                                },
                                required: ["available", "collectionURI", "items", "returned"]
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
                                            required: ["resourceURI", "name"]
                                        }
                                    },
                                    returned: { type: "number" }
                                },
                                required: ["available", "collectionURI", "items", "returned"]
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
                                            required: ["resourceURI", "name"]
                                        }
                                    },
                                    returned: { type: "number" }
                                },
                                required: ["available", "collectionURI", "items", "returned"]
                            },
                            next: {
                                type: "object",
                                properties: {
                                    resourceURI: { type: "string" },
                                    name: { type: "string" }
                                },
                                required: ["resourceURI", "name"]
                            },
                            previous: {
                                type: "object",
                                properties: {
                                    resourceURI: { type: "string" },
                                    name: { type: "string" }
                                },
                                required: ["resourceURI", "name"]
                            }
                        },
                        required: [
                            "id",
                            "title",
                            "description",
                            "resourceURI",
                            "urls",
                            "modified",
                            "start",
                            "end",
                            "thumbnail",
                            "creators",
                            "characters",
                            "stories",
                            "comics",
                            "series",
                            "next",
                            "previous"
                        ]
                    }
                }
            },
            required: ["offset", "limit", "total", "count", "results"]
        }
    },
    required: [
        "code",
        "status",
        "copyright",
        "attributionText",
        "attributionHTML",
        "etag",
        "data"
    ]
})

export default model('Event', EventeSchema);
