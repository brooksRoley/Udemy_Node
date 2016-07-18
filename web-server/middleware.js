var middleware = {
  requireAuthentication: function(req, res, next){
    console.log("private route hit.");
    next();
  },
  logger: function(req, res, next){
    var today = new Date().toString();
    console.log("Request: " + req.method + " " + req.originalUrl + " " + today);
    next();
  }
};

module.exports = middleware;