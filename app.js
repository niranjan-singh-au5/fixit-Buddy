var express = require("express")
var hbs = require("hbs")
var bodyParser = require("body-parser")
var multiparty = require("multiparty")
const mongodb = require("mongodb")
var session = require("express-session")
var cloudinary = require("cloudinary")
const nodemailer = require("nodemailer");
const mongoose = require("mongoose")

var app = express()

app.use(express.static("public"))
app.use(express.static("uploads"))

app.set("view engine", "hbs")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
    secret: "qwerty",
    cookie: {
        maxAge: 1000 * 100 * 60,
        httpOnly: true,
        path: "/"
    }

}))

var url = "mongodb+srv://niranjan:niranjan@cluster0-4bdxx.mongodb.net/fixitbuddy?retryWrites=true&w=majority"
var DB = ""

mongoose.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

// mongodb.MongoClient.connect(url, function (err, client) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Atlas Connected")
//         DB = client.db("fixitbuddy");
//     }
// })

// cloudinary.config({
//     cloud_name: "blues1905",
//     api_key: "642721642791148",
//     api_secret: "u-yjKxbeck9WFW7Z4QJeegx77Io"
// })

// var email = []
// console.log(email)


const service = require("./controller/service.js")

const home = require("./controller/home.js")

const user = require("./controller/user.js")


app.get("/", home.Controller.home)

app.get("/service", service.Controller.service)

app.get("/signuplogin", user.Controller.signuplogin )


app.post("/usersignup", user.Controller.usersignup)

app.post("/otp", user.Controller.otp)

app.post("/userlogin", user.Controller.userlogin)

app.post("/bookedService", user.Controller.bookedService)

// app.use(user.Controller.middle)

app.get("/profile", user.Controller.profile)

app.post("/updateAddress", user.Controller.updateAddress)

app.post("/updateuserinfo", user.Controller.updateuserinfo)

app.get("/logout", user.Controller.logout)

/////////////////////////////Admin Routes///////////////////////////
app.get("/Admin", function(req, res){
    res.render("Admin",{

    });
    
    
});

app.get("/user-signin", function(req, res){
    res.render("signup",{

    });
})
    
app.get('/dashboard',function(req,res){
    res.render('dashboard')
});
    
app.get('/employee',function(req,res){
    res.render('employee')
});
    
app.get('/orderapproval',function(req,res){
    res.render('orderapproval')
});
    
app.get('/information',function(req,res){
    res.render('information')
});



app.listen(4000);