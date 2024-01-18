import { Router } from "express"; 

export const calculatorRouter = Router();

calculatorRouter.get("/", (req,res,next) => {
  console.log("Res")
  res.send("ok");
})
