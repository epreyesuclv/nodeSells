class InputRequire extends Error{
    constructor(){
        super()
    }
}
class DuplicateEmail extends Error{
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
    DuplicateEmail,
    IncorrectCredentials
}