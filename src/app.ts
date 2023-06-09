import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routers/index.js"
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app
	.get('/health', (_req, res) => res.send('Ok'))
	.use(routes)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server runnig on port: ${PORT}`));