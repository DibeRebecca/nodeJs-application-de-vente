const jwt=require('jsonwebtoken');
module.exports=(req,res,next)=>{
    try {
        const token=res.headers.authorization.split('')[1];
        const decodedtoken= jwt.verify(token,'RANDOM_TOKEN');
        const userId=decodedtoken.userId;
        if(req.body.userId && req.body.userId!= userId){
            throw 'user id non valide';
        }
        else{
            next();
        }
    } catch (error) {
        res.status(401).json({error:error| 'requette non authentifiée'});
    }
}