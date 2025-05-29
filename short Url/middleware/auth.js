const  { getUser }= require("../service/auth")

async function restrictToLoggedinUserOnly(req, res, next){
    const userId  = req.headers["Authorization"];
    if(!userId) res.redirect("/login", );

    const token = userId.split("Bearer ")[1];
    const user = getUser(token);
    if(!user) return res.redirect("/login");
    
    req.user = user;
    next();
}


async function cheackAuth (req, res, next) {
      const userId  = req.headers["authorization"];
       const token = userId.split("Bearer ")[1];
   
    
    const user = getUser(token);
    
    
    req.user = user;
    next();
}
module.exports = {
    restrictToLoggedinUserOnly,
    cheackAuth
}