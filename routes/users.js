const express = require('express')
const { handleGetAllUsers, handleGetParticularUser, handleUpdateUser, handleDeleteUser, handleCreateUser } = require('../controllers/user')
const router = express.Router()

const User = require('../models/users')

router.get('/', handleGetAllUsers)

// router.get('/', async (request, response)=>{
//     // console.log(request.headers)
//     const allDbUsers = await User.find({})
//     return response.json(allDbUsers)
// })

//For dynamic ID's
//Get request
router.get('/:id', handleGetParticularUser)

//Patch request
router.patch('/:id', handleUpdateUser
    //before db
    // const id = Number(request.params.id)
    // const body = request.body
    // console.log(body)
    // const userIndex = users.findIndex(user => user.id === id)
    // if(userIndex === -1){
    //     return response.json({status: 'error', message: 'Could not find this ID'})
    // }
    // users[userIndex] = {...users[userIndex] ,...body}
    // fs.writeFile('./FakeData.json', JSON.stringify(users), (error, data)=>{
    //     if(error){
    //         response.json({status: 'error', message: error})
    //     }
    //     return response.json({ status: 'success', message: 'Updated successfully', user: users[userIndex] });
    // })
) 

//Delete request
router.delete('/:id', handleDeleteUser
    // const id = Number(request.params.id)
    // const body = request.body 
    // console.log(body)
    // const userIndex = users.findIndex(user => user.id === id)
    // if(userIndex == -1){
    //     return response.json({status: 'error', message: error})
    // }
    //Pending code here
)

//Put request
router.put('/', (request, response)=>{
    return response.json({ status: 'pending'})
})

//Post request
router.post('/', handleCreateUser
    //Using Database don't need to do this
    // const newUser = {...body, id: users.length+1}
    // users.push(newUser)
    // fs.writeFile('./FakeData.json', JSON.stringify(users), (error, data)=>{
    //     if(error){
    //         return response.status(500).json({status: 'error', message: 'failed to write file'})
    //     }
    //     response.json({status: 'success', user: newUser, message: 'Added successfully'})
    // })
)

module.exports = router