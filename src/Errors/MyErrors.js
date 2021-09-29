class InputRequire extends Error{
    constructor(){
        super()
    }
}
class DuplicateFlower extends Error{
    constructor(){
        super()
    }
}
class IncorrectCredentials extends Error{
    constructor(){
        super()
    }
}

module.exports = {
    InputRequire,
    DuplicateFlower,
    IncorrectCredentials
}