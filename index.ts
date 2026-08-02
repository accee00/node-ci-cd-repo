import express, { type Response, type Request } from "express";
import env from "dotenv";

env.config({
    path: ".env"
});

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  return res.send("welcome to node ci cd pipeline");
});

app.listen(PORT, () => {
  console.log(`Server is running at port no http://localhost:${PORT}`);
}); 