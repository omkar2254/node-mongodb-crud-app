const User = require("../models/users")

//Function for getting all users
const handleGetAllUsers = async (request, response)=>{
    const allDbUsers = await User.find({})
    return response.json(allDbUsers)
}

const handleGetParticularUser = async(request, response)=>{
    const getUser = await User.findById(request.params.id)
    if(!getUser){
        return response.error('User not found')
    }
    return response.success('User found successfully')
}

//Patch
const handleUpdateUser = async(request, response)=>{
    const updateUser = await User.findByIdAndUpdate(request.params.id)
    if(!updateUser){
        return response.json({message:'User not found'})
    }
    return response.json({message: 'User updated successfully'})
}

//Delete
const handleDeleteUser = async(request, response)=>{
    const deleteUser = await User.findByIdAndDelete(request.params.id)
    if(!deleteUser){
        return response.json({message: 'User Not found'})
    }
    return response.json({message: 'User deleted successfully'})
}

//Post - Create user
const handleCreateUser = async(request, response)=>{
    const body = request.body
    if( !body || !body.first_name || !body.last_name || !body.email || !body.job_title || !body.gender){
        return response.status(400).error('All fields are required')
    }
    await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        job_title: body.job_title,
        gender: body.gender
    })
    return response.status(201).json({message: 'User added successfully'})
}
module.exports = {
    handleGetAllUsers,
    handleGetParticularUser,
    handleUpdateUser,
    handleDeleteUser,
    handleCreateUser
}