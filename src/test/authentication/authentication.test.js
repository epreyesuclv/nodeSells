const { doRegister, doRegisterWithToken, doLogin } = require('./authentication')


let token;
test('registrtion', async () => {
    const data = await doRegister();

    expect(data.status).toBe(200)
    token = data.token
})
test('login ', async() => {
    const data = await doLogin()
    expect(data.status).toBe(200)

    token = data.token

})
test('buy a flower', async () => {
    const data = await doBuy(token)

    expect(data.status).toBe(200)
})