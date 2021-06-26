exports.notFound = (req, res, next) =>{
    console.log('ok')
    const err = new Error();
    err.message = 'Not Found';
    err.status = 404;
    next(err);
}

exports.appError=(err,req,res,next) =>{
     res.status(err.status || 500);
     res.json({
         error:{
             message:err.message
         }
     })
}