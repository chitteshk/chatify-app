import express from "express";
import dotenv from "dotenv";
import appRoutes from "./routes/auth.route.js"; //.js is important here
import messageRoute from './routes/message.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/auth", appRoutes);
app.use("/api/messages", messageRoute);


app.listen(PORT, () => {
  console.log("Server listning on port: " + PORT);
});
