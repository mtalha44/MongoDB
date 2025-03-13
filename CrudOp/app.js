const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/' , (req , res) => {
    res.send('Hello World');
})

app.get('/create' , async (req , res) => {
   let createUser = await userModel.create( {
        name : "Hamza",
        age : 12,
        email : "hamza@example.com"
    } )

    res.send(createUser)
})

app.get('/update' , async (req , res) => {

    const updatedUser = await userModel.updateOne( { email : "talha@example.com" } , { $set : { name : "Bilal" , email : "bilal@gmail.com" } } )
    res.send(updatedUser);
})

app.get('/find' , async (req , res) => {

    // const findUser = await userModel.findOne( { email : "bilal@gmail.com" } )
    const findUser = await userModel.find()
    res.send(findUser);
})

// app.get('/delete' , async (req , res) => {
//     const deleteUser = await userModel.deleteOne( {email : "bilal@gmail.com"});
//     res.send(deleteUser);
// })

app.get('/delete' , async (req , res) => {
    const deleteUser = await userModel.findOneAndDelete( {email : "talha@example.com"});
    res.send(deleteUser);
})

// app.listen(3000 , ()=> {
//     console.log('Run successfully');
// })
