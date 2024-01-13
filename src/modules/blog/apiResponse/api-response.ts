import {ApiResponseOptions} from '@nestjs/swagger';

export const apiResponseGetBlogs: ApiResponseOptions = {
    status: 200,
    description: 'Profile user',
    schema: {
        type: 'array',
        items: {
            properties: {
                id: {
                    type: 'string',
                },
                title: {
                    type: 'string',
                },
                author: {
                    type: 'string',
                },
                date: {
                    type: 'string',
                    format: 'date-time',
                },
                description: {
                    type: 'string',
                },
            }
        }
    }
};


export const apiResponsePostBlogs: ApiResponseOptions = {
    status: 200,
    description: 'Profile user',
    schema: {
        type: 'object',
        properties: {
            id: {
                type: 'string',
            },
            title: {
                type: 'string',
            },
            author: {
                type: 'string',
            },
            date: {
                type: 'string',
                format: 'date-time',
            },
            description: {
                type: 'string',
            },
        }
    }
};
