import { getAllCodeBlocks } from "../Services/CodeBlocks.Services";
import { Request, Response } from "express";

export const getAllCodeblocks = async (req: Request, res: Response) => {
	try {
		const codeBlocks = await getAllCodeBlocks();
		return res.status(200).json(codeBlocks);
	} catch (err) {
		throw err;
	}
};
