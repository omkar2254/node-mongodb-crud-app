const fs = require('fs')

const logRequestResponse = (fileName) => {
    return (request, response, next)=>{
        fs.appendFile(
            fileName, 
            `\n${Date.now()} : ${request.ip} : ${request.method} : ${request.path}\n`,
            (error, data)=>{
                next()
            }
        )
    }
}

module.exports = {
    logRequestResponse
}