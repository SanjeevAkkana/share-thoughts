import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv, { config } from 'dotenv';
import Post from './Models/Post.js';
import Job from './Models/Job.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://AkkanaSanjeev:Sanjeev12@cluster0.nouv3zf.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.get("/", async (req, res) => {
    try {
        let posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ error: err })
    };
})

app.post("/", async(req, res) => {
    try {
        let name = req.body.name;
        let data = await Job.find({ name: name });
        if (data[0]) {
            res.json({ status: "Found" })
        }
        else{
            let job = new Job({
                name: req.body.name,
                qualification: req.body.qualification,
                experience: req.body.experience,
                about: req.body.about,
                works: req.body.works
            });
            await job.save();
            res.json({ status: "ok" })
        }
    } catch (err) {
        res.json({ err: err });
    }

})

app.post("/post", async (req, res) => {
    try {
        let post = new Post({
            title: req.body.title,
            category: req.body.category,
            description: req.body.description
        });
        await post.save();
        res.json({ status: "ok" })
    } catch (err) {
        res.json(err);
    }

})

app.listen(process.env.PORT || 9000, () => { console.log("Running") })