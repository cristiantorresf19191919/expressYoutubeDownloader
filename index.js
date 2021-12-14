const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();

app.use(cors());

app.use(express.static("public"))
app.get("/download", (req, res) => {
  try {
    var URL = req.query.URL;
    res.header("Content-Disposition", 'attachment; filename="video.mp4"');
    ytdl(URL, {
      format: "mp4",
    }).pipe(res);
  } catch (error) {
    console.log("🚀 ~ file: index.js ~ line 16 ~ app.get ~ error", error);
  }
});
app.get("/mp3", (req, res) => {
  try {
    var URL = req.query.URL;
    res.header("Content-Disposition", 'attachment; filename="video.mp4"');
    ytdl(URL, {
      format: "mp3",
    }).pipe(res);
  } catch (error) {
    console.log("🚀 ~ file: index.js ~ line 16 ~ app.get ~ error", error);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server Works !!! At port 4000");
});
