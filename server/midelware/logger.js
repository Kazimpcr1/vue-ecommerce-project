const jwt = require("jsonwebtoken");

const log = (request, response, next) => {
  console.log(`Received ${request.method} request for ${request.url}`);
  next();
};

module.exports = log;

// const auth = (request, response, next) => {
//   // Get the token from the header
//   const token = req.header("Authorization").replace("Bearer ", "");

//   // If there's no token, return an error
//   if (!token) {
//     return res.status(401).json({ message: "No token, authorization denied" });
//   }

//   try {
//     // Verify the token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // Add the decoded user object to the request
//     req.user = decoded.user;

//     // Call the next middleware function or API endpoint
//     next();
//   } catch (err) {
//     // Return an error if the token is invalid
//     res.status(401).json({ message: "Token is not valid" });
//   }
// };

// module.exports = auth;
