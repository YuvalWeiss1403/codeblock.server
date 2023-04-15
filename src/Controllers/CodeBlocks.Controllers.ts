import {
	getAllCodeBlocks,
	updateCodeBlock,
} from "../Services/CodeBlocks.Services";
import { Request, Response } from "express";

export const getAllCodeblocks = async (req: Request, res: Response) => {
	try {
		const codeBlocks = await getAllCodeBlocks();
		return res.status(200).json(codeBlocks);
	} catch (err) {
		throw err;
	}
};

export const updateBlock = async (req: Request, res: Response) => {
	try {
		const codeblock = await updateCodeBlock(req.body._id, req.body.newCode);
		res.status(201).json(codeblock);
	} catch (err) {
		throw err;
	}
};
