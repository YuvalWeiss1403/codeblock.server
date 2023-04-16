import express from "express";
import routes from "./Routes/index";
import bodyParser from "body-parser";
import cors from "cors";
import { connectToDB } from "./connection";
import dotenv from "dotenv";
import { CodeBlockModel, ICodeBlock } from "./Models/CodeBlocks.Models";

const socket = require("socket.io");

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const server = app.listen(port, () =>
	console.log(`Listening on http://localhost:${port}`)
);

const io = socket(server, {
	cors: {
		origin: "*",
	},
});
app.use(
	cors({
		origin: "*",
	})
);

io.on("connection", (socket: any) => {
	socket.on("join_room", async (data: ICodeBlock) => {
		if ((data.usersConnected = 0)) {
			socket.join(data._id);
			const updateUser: ICodeBlock = data;
			updateUser.usersConnected = 1;
			await CodeBlockModel.findOneAndUpdate(data._id, updateUser);
			socket.broadcast.to(data._id).emit("users_connected");
		}
	});

	socket.on("codeBlock", (_id: string, code: string) => {
		socket.broadcast.to(_id).emit("codeBlock", code);
	});
	socket.on("users_connected", (_id: string) => {});

	socket.on("disconnect", async (data: ICodeBlock) => {
		const updateUser = data;
		if (updateUser && updateUser.usersConnected > 0) {
			updateUser.usersConnected--;
			await CodeBlockModel.findOneAndUpdate(data._id, updateUser);
		}
		console.log("USER DISCONNECTED");
	});
});

app.use(routes);
connectToDB();
