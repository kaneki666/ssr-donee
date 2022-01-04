const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 5000;
// const PORT = 3000;
// app.use(cors());
// app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "./build")));

app.get("/*", (req, res, next) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error during file reading", err);
      return res.status(404).end();
    }
    // get post info
    const post = req.query;
    console.log("req");
    console.log(post.url, post.image);
    // const post = getPostById(postId);
    // if (!post) return res.status(404).send("Post not found");

    // inject meta tags
    data = data.replace("__META_OG_URL__", post.url);
    data = data.replace("__META_OG_TITLE__", "Donee goal detail");
    data = data.replace("__META_OG_DESCRIPTION__", "laptop");
    data = data.replace(
      "__META_OG_IMAGE__",
      "https://donee.s3.amazonaws.com/media/images/goal_compressed_images/photo-1488521787991-ed7bbaae773c.jpg"
    );
    return res.send(data);
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
