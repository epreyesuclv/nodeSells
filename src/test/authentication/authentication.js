

const axios = require('axios');
const { response } = require('express');

const USER_EMAIL = "ldtdsfasdfafy@gmail.com"
const USER_PASS = "1234"

let status;
let token;

async function doRegister() {

    const options = {
        method: 'POST',
        url: 'http://localhost:4000/register',
        headers: { 'Content-Type': 'application/json' },
        data: { email: USER_EMAIL, password: USER_PASS, firstName: "pedro", lastName: "perez" }
    };
    await axios.request(options).then(handlerThen).catch(handlerCatch);
    //console.log(resp)
    return {
        token: token,
        status: status
    }
}

async function doLogin() {

    const options = {
        method: 'POST',
        url: 'http://localhost:4000/login',
        headers: { 'Content-Type': 'application/json' },
        data: {
            email: USER_EMAIL,
            password: USER_PASS
        }
    };
    await axios.request(options).then(handlerThen).catch(handlerCatch);
    //console.log(resp)
    return {
        token: token,
        status: status
    }
}

async function doBuy(token) {
    const options = {
        method: 'POST',
        url: 'http://localhost:4000/welcome',
        headers: { 'Content-Type': 'application/json' },
        data: { token: token }
    };
    await axios.request(options).then(handlerThen).catch(handlerCatch);
    //console.log(resp)
    return {
        status: status
    }
}

function handlerThen(response) {
    status = response?.status ?? "not server found"
    token = response ?? ""
}

function handlerCatch(err) {
    status = err.response?.status ?? " not server found"
}
module.exports = {
    doRegister,
    doLogin,
    doBuy
}

