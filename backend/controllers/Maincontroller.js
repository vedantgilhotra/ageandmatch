

let home = (req,res)=> {
    res.render("index");
}

let signup = (req,res) => {
    res.render("signup",{
        msg: "welcome to signup page"
    });
}

let profile = (req,res) => {
    res.render("profile");
}

module.exports = {
    home: home,
    signup: signup,
    profile: profile
}