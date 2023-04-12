import mongoose, { Schema } from "mongoose";
export interface ICodeBlock {
	title: string;
	code: string;
	usersConnected: number;
	isMentor: boolean;
}

export const codeBlockSchema = new Schema<ICodeBlock>({
	title: { type: String, required: true },
	code: { type: String, required: true },
	usersConnected: { type: Number, required: true },
	isMentor: { type: Boolean, required: true },
});
export const CodeBlockModel = mongoose.model<ICodeBlock>(
	"codeblocks",
	codeBlockSchema
);
