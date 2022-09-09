// const express = require("express");
// const path = require('path');
// const app = express();
// const port = 80;

// app.use('/static', express.static('static'));  // for serving static

// app.set('view engine', 'pug')    // set the template engine as pug

// app.set('views', path.join(__dirname, 'views'));   //set the views directory

// Our pug demo endpoint
// app.get("/demo", (req, res) => {
//     res.status(200).render('demo', { title: 'Hey Aaddiii', message: 'Hello there bestuu!!'})
// });

// app.get("/", (req, res) => {
//     res.status(200).send("This is home page of my first express app with roy");
// });
// clearImmediate
// app.get("/about", (req, res) => {
//     res.send("This is about page of my first express app with roy");
// });

// app.post("/about", (req, res) => {
//     res.send("This is post request of about page of my first express app with roy");
// });

// app.get("/this", (req, res) => {
//     res.status(404).send("This is page is not found chalo niklo");
// });

// app.listen(port, () => {
//     console.log(`the application started successfully on port ${port}`);
// });


// -------------------------------------------------------------------------------------------------------------------
// ___________________________________________________________________________________________________________________


const express = require("express");
const { fstat } = require("fs");
const path = require('path');
const fs = require("fs");
const app = express();
const port = 80;

//EXPRESS SPECIFICATION STUFF
app.use('/static', express.static('static'));  // for serving static
app.use(express.urlencoded())

// PUG SPECIFICATIONS
app.set('view engine', 'pug')    // set the template engine as pug
app.set('views', path.join(__dirname, 'views'));   //set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    const con = "This is simulation game set in a virtual world so don't call ambulance when u get shot.. :)"
    const params = { 'title': 'PUBG is the best Game', 'content': con }
    res.status(200).render('index.pug', params)
})

app.post('/', (req, res)=>{
    Name = req.body.Name
    PlayerID = req.body.PlayerID
    Age = req.body.Age
    Address = req.body.Address

    let outputToWrite = `The name of the Player is ${Name}, ${PlayerID}, ${Age} years old, residing at ${Address}.`

    fs.writeFileSync('output.txt', outputToWrite)
    
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('index.pug', params)

});

// START THE SERVER

app.listen(port, () => {
    console.log(`the application started successfully on port ${port}`);
});
