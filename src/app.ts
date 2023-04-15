import express from "express";
import routes from "./Routes/index";
import bodyParser from "body-parser";
import cors from "cors";
import { connectToDB } from "./connection";
import dotenv from "dotenv";
import { ICodeBlock } from "./Models/CodeBlocks.Models";

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
	socket.on("join_room", (data: ICodeBlock) => {
		socket.join(data._id);
	});

	socket.on("codeBlock", (_id: string, code: string) => {
		socket.broadcast.to(_id).emit("codeBlock", code);
	});

	socket.on("disconnect", () => {
		console.log("USER DISCONNECTED");
	});
});

app.use(routes);
connectToDB();
