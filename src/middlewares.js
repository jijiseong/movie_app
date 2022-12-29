export const localsMiddleware = (req, res, next) => {
  console.log(req.session);
  console.log("test");
  next();
};
