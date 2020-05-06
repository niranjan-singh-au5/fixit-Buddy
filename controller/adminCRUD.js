const Admin ={}
var addAdmin = require("../models/addAdmin.js");

//-----------------Post for add Admin-------------//
Admin.create_admin = function(req,res){
    new addAdmin({
        adminid:req.body.id,
    firstName:req.body.firstName,
    lastName:req.body.lastname,
    fullName:req.body.fullName,
    gender:req.body.gender,
    mobile :req.body.mobile,
    email:req.body.email,
    password:req.body.password,
    })
    addAdmin.Find(function(err, admin){
        if(err)
        res.send(err)
        res.json(admin);
    });
}

//--------------read for admin--------------------//
Admin.read_admin = function(req, res){
    let id = req.params._id;
    addAdmin.findById(id, function(err, admin) {
        if (err)
            res.send(err)
 
        res.json(admin);
    });
}

//-----------Update for admin---------------------//
Admin.update_admin = function(req,res){
    var conditions ={_id:req.params._id}
    
    addAdmin.update(conditions , req.body)
    .then(doc =>{
        if(!doc) {
            return  res.status(404).end();}
            return res.status(200).json(doc)
        })
        .catch(err => next(err));
        
}

//---------------DELETE for admin--------------------//
Admin.delete_admin = function(req,res){
    console.log(req.params._id);
    let id = req.params._id;
    addAdmin.remove({
        _id : id
    }, function(err,result) {
        if (err)
            res.send(err);
        else
            res.json(result);	
    });
}

module.exports = {
    Admin:Admin
};