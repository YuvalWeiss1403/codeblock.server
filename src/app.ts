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
	console.log(socket.id);

	socket.on("join_room", (data: ICodeBlock) => {
		socket.join(data._id);
		console.log("User Joined Room: " + data._id);
	});

	socket.on("send_message", (data: ICodeBlock) => {
		console.log(data);
		socket.to(data._id).emit("receive_message", data.code);
	});

	socket.on("disconnect", () => {
		console.log("USER DISCONNECTED");
	});
});

app.use(routes);
connectToDB();
