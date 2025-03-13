const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./model/user')

// Call express.json() and express.urlencoded() as functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine (note the space instead of a hyphen)
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index'); // This will look for a file "views/index.ejs"
});

app.get('/read', async (req, res) => {
  let allusers = await userModel.find();
  // console.log(allusers);
  res.render('read' , { users : allusers }); // This will look for a file "views/read.ejs"
});

app.post('/create' , async (req , res) => {
  let { imgurl , username , email } = req.body;
  let userdata =await userModel.create({
    imgurl,
    username,
    email,
  })
  res.redirect('/read')
  // console.log(imgurl , username , email);
})

app.get('/delete/:userId' , async (req , res) => {
    let deleteUser = await  userModel.deleteOne({ _id : req.params.userId });
    res.redirect('/read');
})

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
