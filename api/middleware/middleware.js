function logger(req, res, next) {
  // DO YOUR MAGIC
  const method = req.method;
  const requestUrl = req.originalUrl;
  const timeStamp = new Date().toDateString();
  console.log(`Method : ${method}
  Request Url: ${requestUrl}
  Time : ${timeStamp}}`);
  next();
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ message: "missing required name field" });
  } else {
    next();
  }
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost,
};
