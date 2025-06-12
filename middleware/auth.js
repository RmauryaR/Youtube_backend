import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    console.log("Auth Header:", req.headers.authorization); // ADD THIS
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    let decodeData = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decodeData?.id;
    console.log("Decoded userId:", req.userId); // ADD THIS
    next();
  } catch (error) {
    console.error("Auth Error:", error); // ADD THIS
    res.status(400).json("Invalid Creadentials");
  }
};
export default auth;
