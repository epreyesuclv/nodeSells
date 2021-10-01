const getAllFlowers = {
    tags: ['Flowers'],
    description: 'Get all flowers in the database',


    responses: {
        '200': {
            description: 'Here are your flwoers !.Return an array of object with the properties below',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
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
            required: true,
            type: 'string',
        },
    ],

    responses: {
        '200': {
            description: 'get the specific flower that you pass into parameters',
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
    description: 'buy the flower pass in the body.It simple returns a 200 status exit code if the flowers exist in the databse',

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
                        address: {
                            type: 'string',
                            example: 'Tokio,Japan'
                        },
                        amount: {
                            type: 'integer',
                            example: 20
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


const createFlower = {
    tags: ['Owner'],
    description: 'create a single flower buy the owner',

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
                        region: {
                            type: 'string',
                            example: 'Tokio,Japan'
                        },
                        color: {
                            type: 'integer',
                            example: 20
                        },
                        token: {
                            type: 'string',
                            example: 'dfahsdjf.gmnopmn9066y9u2u3.69uhrsdhv'
                        }
                    },

                }
            }
        },
        required: true
    },

    responses: {
        '200': {
            description: 'flower created',
            content: {
                'application/json': {
                    schema: {
                        type: 'string',
                        example: 'flower created!!'
                    }
                }
            },

            '503': {
                description:
                    'I simply include this for testing , but is probable that was an error in my code  I apologize'

            },


        }
    }
}

const deleteflower = {
    tags: ['Owner'],
    description: 'delete a single flower, it is only for owner use',

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
                            example: 'dfahsdjf.gmnopmn9066y9u2u3.69uhrsdhv'
                        }
                    },

                }
            }
        },
        required: true
    },

    responses: {
        '200': {
            description: 'flower deleted',
            content: {
                'application/json': {
                    schema: {
                        type: 'string',
                        example: 'flower deleted!!'
                    }
                }
            },
            '409': {
                description:
                    ' the flowers does not exist in the database'
            },

            '503': {
                description:
                    'I simply include this for testing , but is probable that was an error in my code  I apologize'

            },


        }
    }
}


module.exports = {
    getAllFlowers,
    buyFlower,
    getFlowerById,
    createFlower,
    deleteflower
}