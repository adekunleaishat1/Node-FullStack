const jwt = require("jsonwebtoken");

const verifyToken = (err, req, res, next) => {
  let secretKey = process.env.SECRET_KEY;
  const authHeader = req.headers.Authorization || req.headers.authorization;
  if (!authHeader) {
    res.status(400).send({ message: "Authorisation Not provided" });
  } else {
    if (!authHeader.startswith("Bearer")) {
      res.status(400).send({ message: "Invalid Authorization format" });
    } else {
      let token = authHeader.split(" ")[1];
      jwt.verify(token, secretKey, (err, decode) => {
        if (err) {
          res.status(400).send({ message: "Error Verifying token" });
        }else{
            console.log("received Details : ", decode.user)
            req.user = decode.user
            next()
        }
      });
    }
  }
};

module.exports = verifyToken;
