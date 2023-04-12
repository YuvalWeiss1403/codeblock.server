import express from "express";
import { getAllCodeblocks } from "../Controllers/CodeBlocks.Controllers";
const codeBlocksRouter = express.Router();
codeBlocksRouter.get("/", getAllCodeblocks);
export default codeBlocksRouter;
