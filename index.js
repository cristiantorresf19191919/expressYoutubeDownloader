const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();
const got = require('got');

app.use(cors());

app.use(express.static("public"))
app.get("/download", async (req, res) => {
  try {
    var URL = req.query.URL;
    console.log("boom over here");
    const response = await got(`https://noembed.com/embed?url=${URL}`, { json: true });
    const title = response?.body?.title;
    const author = response?.body?.author_name;
    console.log("hey over here 💟", response);
    res.header("Content-Disposition", `attachment; filename="${title}-${author}.mp4"`);
    ytdl(URL, {
      format: "mp4",
    }).pipe(res);
  } catch (error) {
    console.log("🚀 ~ file: index.js ~ line 16 ~ app.get ~ error", error);
  }
});
app.get("/mp3", async (req, res) => {
  try {
    var URL = req.query.URL;
    const response = await got(`https://noembed.com/embed?url=${URL}`, { json: true });
    const title = response?.body?.title;
    const author = response?.body?.author_name;
    console.log("hey over here 💟", response);
    res.header("Content-Disposition", `attachment; filename="${title}-${author}.mp3"`);
    ytdl(URL, {
      format: "mp3",
    }).pipe(res);
  } catch (error) {
    console.log("🚀 ~ file: index.js ~ line 16 ~ app.get ~ error", error);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server Works !!! At port "+process.env.PORT || 3000);
});
