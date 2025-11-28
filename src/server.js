import dotenv from "dotenv";
dotenv.config();


import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import cors from "cors";

// PORT
const port = process.env.PORT || 8000;

// connect to database
import connectDb from "./config/index.js";

// get routes
import auth from "./routes/auth.js";
import task from "./routes/task.js";



app.use(cors({
        origin: 'http://localhost:5173',
        allowedHeaders : ['Content-Type', 'Authorization'],
        methods : ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']
    }));
    


// USING MIDDLEWARES
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

connectDb();

app.use("/api/auth", auth);
app.use("/api/tasks",task);

app.listen(port, () => console.log(`Server is running on port ${port}`));
