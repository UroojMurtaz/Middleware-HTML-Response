const reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send("Please Provide Age")
    }
    if (req.query.age > 90) {
        res.send("Please Provide Age under 90")
    }
    else {
        next()
    }

}

module.exports=reqFilter