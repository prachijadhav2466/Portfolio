import express from 'express';
import cors from 'cors';
import { collection } from './mongo.js'; // Use import to bring in collection from mongo.js
import axios from 'axios';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.post("/", async (req, res) => {
    const { msg } = req.body;

    const collection = { msg:msg };
    
    await collection.insertMany([data])

    
});

app.listen(5173, () => {
    console.log("Server is running on port 5173");
});
