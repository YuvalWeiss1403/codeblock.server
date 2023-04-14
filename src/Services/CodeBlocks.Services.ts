import { ObjectId } from "mongoose";
import { CodeBlockModel, ICodeBlock } from "../Models/CodeBlocks.Models";

export const getAllCodeBlocks = async () => {
	try {
		const codeBlocks = await CodeBlockModel.find();
		return codeBlocks;
	} catch (err) {
		throw err;
	}
};

export const updateCodeBlock = async (_id: ObjectId, codeblock: ICodeBlock) => {
	try {
		const updateCodeblock = await CodeBlockModel.findByIdAndUpdate(
			_id,
			codeblock,
			{
				new: true,
			}
		);
		if (updateCodeblock) {
			return updateCodeblock;
		}
	} catch (err) {
		throw err;
	}
};
