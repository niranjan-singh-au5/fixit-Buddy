var express = require("express");
var bodyParser=require("body-parser")
var hbs = require("hbs")
var app = express();

app.set("view engine", "hbs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const mongodb = require('mongodb');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/addemployee', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected successfully!!")
});

var employeeSchema = require("./models/addemployee");


var user = require("./controllers/emplyCRUD.js")

app.get("/create_details", user.Employee.create_details);

app.get("/read-employee", user.Employee.read_employee);

app.get("/update/:_id", user.Employee.create_employee);

app.post("/create",user.Employee.create)
app.get("/delete_employee/:_id", user.Employee.delete_employee);


app.get("/",function(req,res){
   
    
    res.render("dashboard")
}),



app.get("/",function(req,res){
   
    
    res.render("index")
}),







































/*app.get('/read/:_id', function(req, res) {
    let id = req.params._id;
    addemployee.findById(id, function(err, employees) {
        if (err)
            res.send(err)
 
        res.json(employees);
    });
 
});
app.post("/add",function(req,res){
     new addemployee({
                   emplyid:req.body.id,
                   firstname:req.body.firstname,
                   lastname:req.body.lastname,
                   department:req.body.department,
                   title:req.body.title,
                   mobile:req.body.mobile,
                   email:req.body.email,
                   address:req.body.address,
                   state:req.body.state,
                   nationality:req.body.nationality,
                   experience:req.body.experience,
                   Hdate:req.body.Hdate,
                   Bdate:req.body.Bdate

     })
            
       addemployee.find(function(err, employees) {
        if (err)
            res.send(err)
        res.json(employees);
    });
        
    
    app.put('/update/:_id', function(req, res) {
        
        let id = req.params._id;
        var data={
            emplyid:req.body.id,
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            department:req.body.department,
            title:req.body.title,
            mobile:req.body.mobile,
            email:req.body.email,
            address:req.body.address,
            state:req.body.state,
            nationality:req.body.nationality,
            experience:req.body.experience,
            Hdate:req.body.Hdate,
            Bdate:req.body.Bdate

         }
        
        addemployee.findByIdAndUpdate(id, data, function(err, data) {
        if (err) throw err;
     
        res.json(data);
        });
    });

    app.delete('/delete/:_id', function(req, res) {
        console.log(req.params._id);
        let id = req.params._id;
        addemployee.remove({
            _id : id
        }, function(err,result) {
            if (err)
                res.send(err);
            else
                res.json(result);	
        });
    });
})*/





    

app.listen(5000);