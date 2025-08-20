// const express = require('express'); // for it add types:coomonjs in package.json
import express from "express";// add types as modules in package.json
import notesRoutes from "./routes/notesRoutes.js";
import mongoose from "mongoose";
import cors from 'cors'
import { connectDB } from "./config/db.js";
import dotenv from 'dotenv';
import path from 'path';
const app = express();

app.use(express.json());// Middleware
app.use(cors({
  origin:"*"
}));
app.use((req,res,next)=>{
console.log(`Request Method is ${req.method} and url is ${req.url}`);
next();
console.log(`Request Method is ${req.method} and url is ${req.url}`);
})

app.use("/api",notesRoutes);

// prod deployment start
if(process.env.NODE_ENV === "production"){
app.use(express.static(path.join(__dirname,"../../frontend/frontend/dist")));
app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,"../../frontend/frontend","dist","index.html"));
})
// prod deployment end
}

dotenv.config();
const port = process.env.PORT;

connectDB();
console.log("Mongo URI",process.env.MONGO_URI);


// app.get("/api/notes",(req,res)=>{
// res.status(200).send("You Got 5 Times");
// })

// app.post("/api/notes",(req,res)=>{
//     req.status(201).send({"message":"Notes are created"})
// })

// app.patch("/api/notes/:id",(req,res)=>{
//     req.status(200).send({"message":"Note is updated"})
// })

// app.delete("/api/notes/:id",(req,res)=>{
//     req.status(200).send({"message":"Note is deleted"})
// })

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(port, () => console.log(`Server started on port ${port}`));
  })
  .catch((err) => console.error("DB connection error:", err));
