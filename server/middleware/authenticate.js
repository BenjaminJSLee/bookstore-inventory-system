
const authenticate = (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  return res.status(401).json({
    status: 401,
    error: "unauthorized access",
  });
};

module.exports = {
  authenticate,
};
