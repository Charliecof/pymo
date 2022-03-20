exports.logError = (err,req,res,next) => { 
    console.log(err);
    next(err)
}

exports.errorHandler = (err,req,res,next)=>{
    res.status(500).json({
        message: err.message,
        stack: err.stack
    });
}

exports.errorNotFoud = (req,res,next) =>{
    res.status(404).send({message: 'NOT FOUND'})
}