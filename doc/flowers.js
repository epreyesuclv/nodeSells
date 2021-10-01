const getAllFlowers = {
    tags: ['Flowers'],
    description: 'Get all flowers in the database, and fetch from all nodes',


    responses: {
        '200': {
            description: 'Here are your flwoers !',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            name: {
                                type: 'string',
                                example: 'rosa',
                            },
                            region: {
                                type: 'string',
                                example: 'india',
                            },
                            color: {
                                type: 'string',
                                example: 'rojo',
                            },

                        },
                    },
                },
            },
        }, '503': {
            description:
                'I simply include this for testing , but is probable that was an error in my code  I apologize'

        },

    },


}

const getFlowerById = {
    tags: ["Flowers"],
    description: 'returns a single flower',


    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'flower name',
            required: false,
            type: 'string',
        },
    ],

    responses: {
        '200': {
            description: 'User created successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            name: {
                                type: 'string',
                                example: 'rosa'
                            },
                            region: {
                                type: 'string',
                                example: 'india'
                            },
                            color: {
                                type: "string",
                                example: 'blue'
                            }
                        }
                    }
                }
            }
        },
        '503': {
            description:
                'I simply include this for testing , but is probable that was an error in my code  I apologize'

        },
    }
}

const buyFlower = {
    tags: ['Flowers'],
    description: 'buy the flower pass in the body',

    requestBody: {
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string',
                            example: 'rosa'

                        },
                        token: {
                            type: 'string',
                            example: 'alsdfjlkasdjflk.asdfjasdjfj34jtrta.25[jjhm90'
                        }
                    }
                }
            }
        },
        required: true
    },

    responses: {
        '200': {
            description: 'your flower is on way',
            content: {
                'application/json': {
                    schema: {
                        type: 'string',
                        example: 'your flower will deliver soon'
                    }
                }
            },
            '401': {
                description: 'invalid token, you need to pass a valid token for your user'
            },
            '403': {
                description: 'token require, you need to pass the token in the body'
            },
            '409': {
                description:
                    'your flowers does not exist anymore'
            },

            '503': {
                description:
                    'I simply include this for testing , but is probable that was an error in my code  I apologize'

            },


        }
    }
}

module.exports = {
    getAllFlowers, buyFlower, getFlowerById
}