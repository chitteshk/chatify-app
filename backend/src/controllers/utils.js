import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, //in ms
    httpOnly: true, //prevent XSS attack: cross site scripting attack 
    sameSites: "strict", // CSRF attack 
    secure: process.env.NODE_ENV === 'production' ? false : true
  });

  return token;
};
