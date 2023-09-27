const JWT = require("jsonwebtoken");

async function verify(req,res,next) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
            JWT.verify(token,process.env.ACCESS_TOKEN_SECRET,(error,user)=>{
                if (error) {
                    console.log(error)
                    return res.status(403).json("token is not valid");
                }
                req.user = user;
                next();
            });
        
    } else {
        return res.status(401).json("you are not authenticated");
    }
}



module.exports = verify;