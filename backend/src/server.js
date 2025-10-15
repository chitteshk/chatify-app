import express from "express";
import dotenv from "dotenv";
import appRoutes from "./routes/auth.route.js"; //.js is important here
import messageRoute from './routes/message.route.js';
import path from 'path'; // comes along with node no need package
import { connectDB } from "./lib/db.js";

dotenv.config();

const __dirname = path.resolve();

const app = express();
const PORT = process.env.PORT || 3000; 

app.use(express.json());
app.use("/api/auth", appRoutes);
app.use("/api/messages", messageRoute);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname,'../frontend/dist')));
}
//This line serves static files for production so our backend also serves frontend otherwise users will not see front end app

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname,"../frontend/dist/index.html"))
})


app.listen(PORT, () => {
  console.log("Server listning on port: " + PORT);
  connectDB();
});
