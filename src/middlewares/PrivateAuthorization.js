import jwt from "jsonwebtoken";

const verifyJwt = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  const token =
    res.cookie?.accessToken || (authHeader && authHeader.split(" ")[1]);
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied. No token provided." });
  }
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (!decoded) return res.status(401).json({ message: "Invalid Token" });

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).json({ message: "Someting went wrong" });
  }
};

export default verifyJwt;
