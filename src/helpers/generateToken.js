import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  console.log("JWT_SECRET:", process.env.JWT_SECRET); // Debugging log

  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined. Check your .env file.");
  }

  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

export default generateToken;
