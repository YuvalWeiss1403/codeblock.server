import { CodeBlockModel } from "../Models/CodeBlocks.Models";

export const getAllCodeBlocks = async () => {
	try {
		const codeBlocks = await CodeBlockModel.find();
		return codeBlocks;
	} catch (err) {
		throw err;
	}
};
