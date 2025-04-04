import jwt, { decode } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secret = process.env.JWTKEY;
const authMiddleWare = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (token) {
      const decoded = jwt.verify(token, secret);
      console.log("Decoded data ==> ", decoded)
      req.body._id = decoded?._id;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default authMiddleWare;
