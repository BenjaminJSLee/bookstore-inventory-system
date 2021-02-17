
const authenticate = (req, res, next) => {
  // modify the if statement here for more in-depth authentication
  if (req.session.user) {
    return next();
  }
  return res.status(401).json({
    status: 401,
    msg: "unauthorized access",
  });
};

module.exports = {
  authenticate,
};
