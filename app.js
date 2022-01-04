const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const PORT = 5000;
// app.use(cors());
// app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "./build")));

// app.post("/data", async (req, res) => {
//   const d = req.body;
//   console.log(req.body);
//   res.send("ok");
// });

// app.get("*", function (req, res) {
//   const filePath = path.resolve(__dirname, "./build", "index.html");

//   fs.readFile(filePath, "utf8", function (err, data) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log(req);
//     data = data.replace("__META_OG_TITLE__", "tEST Goal 3");
//     data = data.replace("__META_DESCRIPTION__", "Donee goal detail");
//     data = data.replace("__META_OG_DESCRIPTION__", "laptop");
//     data = data.replace(
//       "__META_OG_IMAGE__",
//       "https://donee.s3.amazonaws.com/media/images/goal_images/photo-1488521787991-ed7bbaae773c_e4nGOZ5.jpeg"
//     );
//     res.send(data);
//   });
// });

app.get("/*", (req, res, next) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error during file reading", err);
      return res.status(404).end();
    }
    // get post info
    const post = req.query;

    // const post = getPostById(postId);
    // if (!post) return res.status(404).send("Post not found");

    // inject meta tags
    data = data.replace("__META_OG_URL__", post.url);
    data = data.replace("__META_OG_TITLE__", "tEST Goal 3");
    data = data.replace("__META_DESCRIPTION__", "Donee goal detail");
    data = data.replace("__META_OG_DESCRIPTION__", "laptop");
    data = data.replace("__META_OG_IMAGE__", post.image);
    return res.send(data);
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
