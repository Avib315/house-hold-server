function auth(req,res,next){
    try {
        req.body.userId = "66548381ee8fe1ae76a7d34d"  
        next()
    } catch (error) {
        console.log(error);
    }
}

module.exports = {auth}