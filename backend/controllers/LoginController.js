const dbconn = require("../databases/sqlite.js");
const User = dbconn.User;
var gendervalue ="";
let enterandmatch = (req,res) => {
    var {name ,age , gender} = req.body;
    gender = gender.toLowerCase();
    console.log(name,age,gender);
    if(!(name && age && gender))
    {
        res.render("signup");
    }
    else {
        User.create({
            name,
            age,
            gender
        }).then( user => {
            console.log("user details added to database");
            if(user.gender =="male" )
            { gendervalue = "female";}
            else{
                 gendervalue = "male";
            }
            User.findAll({
                where : {
                    age: user.age,
                    gender: gendervalue       
                        }
            }).then( users => {
                //console.log("List of matches is ",users);
                var array = [];
                for(i of users)
                {
                    var resname = i.dataValues.name;
                    console.log("obtained name from results is ",resname);
                    var resage = i.dataValues.age;
                    var resgender = i.dataValues.gender;
                    var obj = {
                        name: resname,
                        age:resage,
                        gender:resgender
                    }
                    console.log("created object is ",obj);
                    array.push(obj);
                }
                console.log("Created array is ",array);
                if(array.length != 0)
                {
                    var count = array.length;
                    console.log("Number of matches are ",count);
                   return res.render("profile",{
                        user: user.name,
                       array: array,
                       count: count,
                       alertmessage: "Registered on desi tinder with matches",
                   });
                }
                else
                {
                    var count = 0;
                    return res.render("profile",{
                        user: user.name,
                        count: count,
                        alertmessage: "Registered on desi tinder",
                        //matches = matches
                    });
                }
                //------------
                    });
        }).catch( error => {
            return res.render("signup");
        });

    }
}
module.exports = {
    enterandmatch: enterandmatch
}