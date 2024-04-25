const jwt = require('jsonwebtoken');

const verifyAuthToken = async (req,res,next)=>{
    try{
        const token = req.header("token");
        const email = req.header("email");
        console.log("inside the middleware",token,email);
        if(!email){
            return res.status(400).json({message:"email is not found"});
        }
         const decode = jwt.verify(token,'secret_this_should_be_longer');
         req.roles = decode.roles;
         req.body = {...req.body,email};
         console.log("inside the middleware",req.body);
         next();
    }catch(err){
        return res.status(400).json({message:"Internal server error"})
    }
   

}

module.exports.verifyAuthToken = verifyAuthToken;