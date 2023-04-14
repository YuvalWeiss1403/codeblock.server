import express from "express";
import {
	getAllCodeblocks,
	updateBlock,
} from "../Controllers/CodeBlocks.Controllers";
const codeBlocksRouter = express.Router();
codeBlocksRouter.get("/", getAllCodeblocks);
codeBlocksRouter.put("/", updateBlock);
export default codeBlocksRouter;
