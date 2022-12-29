export const localsMiddleware = (req, res, next) => {
  console.log("req.session: ", req.session);
  next();
};
