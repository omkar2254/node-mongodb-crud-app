const mongoose = require('mongoose')

const connectToMongoDb = async (url)=>{
    try{
        const checkConnection = await mongoose.connect(url)
        return checkConnection
    }catch(error){
        console.error('Error while connecting mongodb', error)
        throw error;
    }
}

module.exports = {
    connectToMongoDb
};