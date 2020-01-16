const jwt = require("jsonwebtoken")
function auth(req,res,next){
    try{
        const token = req.headers["x-access-token"]
        if(!token){
            return res.status(401).json({status:false,msg:"No token"})
        }
        req["user"] = jwt.verify(token,process.env.KEY_JWT)["user"]
        next();
    }catch(e){
        console.log(e)
        return res.status(401).json({status:false,msg:"Error al validar token",error: e.errmsg||e.message})
    }
    
}

module.exports = auth