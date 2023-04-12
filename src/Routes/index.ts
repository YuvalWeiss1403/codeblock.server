import express from "express";
import codeBlocks from "../Routes/CodeBlocks.Routes";
const router = express.Router();

router.use("/codeblock", codeBlocks);

export default router;
