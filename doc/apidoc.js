const { createUserFront, loginUserFront } = require("./user.js")
const { createUserBack } = require("./usersBack")
const { getAllFlowers, getFlowerById, buyFlower } = require("./flowers")
const apiDocumentation = {
    openapi: '3.0.1',
    info: {
        version: '1.3.0',
        title: 'Flower-exampleAPI',
        description: 'This api is just for testing microservice purpose, nothing really happens if you use /buy enpoint, it just return 200 exit code if it find the flower.I will add features in the future,I hope some day this project become reality',
        contact: {
            name: 'Starcout',
            email: 'epreyesuclv@gmail.com',
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
        },
    },
    servers: [
        {
            url: 'http://localhost:4000/',
            description: 'Local Server',
        },
        {
            url: 'https://flowres-example.herokuapp.com/',
            description: 'Production Server',
        },
    ],
    tags: [
        {
            name: 'Flowers',
        },
        {
            name: 'Owner',
        },
    ],
    paths: {
        '/login': {
            post: login

        },
        '/change': {
            post: changePass
        },
        '/flowers': {
            post: createFlower,
            get: getAllFlowers,
            delete: deleteFlower
        },


        '/flowers/{id}': {
            get: getFlowerById,
            delete: deleteFlowerById
        },
        '/flowers': {
            get: getAllFlowers
        },

        '/buy': {
            post: buyFlower
        }

    },

};

module.exports = { apiDocumentation };