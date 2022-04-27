// This is to check that the user is logged in while handling very specific requests.
module.exports = (req, res, next) => {
    // "next" is a function that we call when our middleware is complete, or all finished running.
    // It passes the request off to the next middleware in the chain.
    if (!req.user) {
        return res.status(401).send({ error: "You must log in!" }); // We do not want to use "next" here and just stop the request here.
    }
    next();
};
