import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/user.routes.js";

const app = express();
app.use(cors());
dotenv.config();

const port = process.env.PORT;

app.use(express.json());
app.use('/users', userRouter); // User Router

app.get("/", (req, res) => {
  res.send("SERVER RUNNING!");
});


app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
