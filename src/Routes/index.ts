import express from "express";
import codeBlocks from "../Routes/CodeBlocks.Routes";
const router = express.Router();

router.use("/CodeBlock", codeBlocks);

export default router;
