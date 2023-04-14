import mongoose, { ObjectId, Schema } from "mongoose";
export interface ICodeBlock {
	_id?: ObjectId;
	title: string;
	code: string;
	usersConnected: number;
	isMentor: boolean;
}

export const codeBlockSchema = new Schema<ICodeBlock>({
	_id: { type: Schema.Types.ObjectId, required: false },
	title: { type: String, required: true },
	code: { type: String, required: true },
	usersConnected: { type: Number, required: true },
	isMentor: { type: Boolean, required: true },
});
export const CodeBlockModel = mongoose.model<ICodeBlock>(
	"codeblocks",
	codeBlockSchema
);
