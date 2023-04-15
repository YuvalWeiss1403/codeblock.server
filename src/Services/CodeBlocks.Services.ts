import { ObjectId } from "mongoose";
import { CodeBlockModel } from "../Models/CodeBlocks.Models";

export const getAllCodeBlocks = async () => {
	try {
		const codeBlocks = await CodeBlockModel.find();
		return codeBlocks;
	} catch (err) {
		throw err;
	}
};

export const updateCodeBlock = async (_id: ObjectId, newCode: string) => {
	try {
		const codeBlock = await CodeBlockModel.findById(_id);
		if (codeBlock) {
			codeBlock.code = newCode;
			const updateCodeBlock = await CodeBlockModel.findByIdAndUpdate(
				_id,
				codeBlock,
				{ new: true }
			);
			if (updateCodeBlock) {
				return updateCodeBlock;
			}
		}
	} catch (err) {
		throw err;
	}
};
