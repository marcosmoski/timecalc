import express from "express";
import { calculatorRouter } from "./routes/calculator";
const app = express();

app.use("/calculator", calculatorRouter);

app.listen(3000, () => {
  console.log("Running at 3000");
})