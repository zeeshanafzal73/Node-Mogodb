 module.exports = (req, res, next) => {
    console.log("inside middleware");
    console.warn(`Route is ${req.url}`);
    next();
  };