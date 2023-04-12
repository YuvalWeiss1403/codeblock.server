import express from "express";
import routes from "./Routes/index";
import bodyParser from "body-parser";
import cors from "cors";
import { connectToDB } from "./connection";
import http from "http";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

export const server = http.createServer(app);
server.listen(3001, () => {
	console.log("SERVER IS RUNNING");
});

app.use(routes);
connectToDB();
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
