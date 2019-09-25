var crypto = require('crypto')
let myPassword = 'password123'

function encryptMyPass(password){
    let result = crypto.createHmac('sha256','jc10').update(password).digest('hex')
    return result
}

console.log(myPassword + 'is changed to '+ encryptMyPass(myPassword))