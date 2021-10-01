const login = {
    tags: ['Owner'],
    description: 'this is only for owner use, it returns the token for authentication',

    requestBody: {
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {

                        name: {
                            type: 'string',
                            description: "you  dont actully need to pass this",
                            example: 'alfonse.snow@email.com',
                            required: false
                        },
                        password: {
                            type: 'string',
                            description: "unencrypted user's password",
                            example: '!1234$#',
                        },
                    },
                },
            },
        },
        required: true,
    },
    responses: {
        '200': {
            description: 'User login successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            token: {
                                type: 'string',
                                example: "asdhfuasdhfupoashfpuoahwfoh.wurfhuhz1234hfsp9dfy",
                            },

                        },
                    },
                },
            },
        },
        '409': {
            description: 'incorrect credentials',

        },
        '402': {
            description:
                'you need to include all parameter in the body , as json format',
        }, '503': {
            description:
                'I simply include this for testing , but is probable that was an error in my code  I apologize'

        },

    },
};


const change = {
    tags: ['Owner'],
    description: 'use this if your want to change the password',

    requestBody: {
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {

                        oldPass: {
                            type: 'string',
                            description: " unencrypted user's password",
                            example: '1234',
                        },
                        newPass: {
                            type: 'string',
                            description: "your new password",
                            example: '!1234$#',
                        },
                    },
                },
            },
        },
        required: true,
    },
    responses: {
        '200': {
            description: 'User pass changed successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            token: {
                                type: 'string',
                                example: "asdhfuasdhfupoashfpuoahwfoh.wurfhuhz1234hfsp9dfy",
                            },

                        }
                    },
                },
            },
        },
    },
    '409': {
        description: 'it is caused when cast parameters, please use only string format in all fields required',
    }, '503': {
        description:
            'I simply include this for testing , but is probable that was an error in my code  I apologize'

    },

}



module.exports = { login, change };