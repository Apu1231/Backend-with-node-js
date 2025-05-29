const  { getUser }= require("../service/auth")

async function restrictToLoggedinUserOnly(req, res, next){
    const userId  = req.cookies?.uid;
    if(!userId) res.redirect("/login", );
    
    const user = getUser(userId);
    if(!user) return res.redirect("/login");
    
    req.user = user;
    next();
}


async function cheackAuth (req, res, next) {
       const userId  = req.cookies?.uid;
   
    
    const user = getUser(userId);
    
    
    req.user = user;
    next();
}
module.exports = {
    restrictToLoggedinUserOnly,
    cheackAuth
}