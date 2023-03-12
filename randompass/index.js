const generatepassword = require('generate-password')

var password = generatepassword.generate({
    length:10,
    numbers:true
})

console.log(password)