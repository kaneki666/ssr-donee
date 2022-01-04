const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 5000;

// app.get("/", function (req, res) {
//   const filePath = path.resolve(__dirname, "./public", "index.html");

//   fs.readFile(filePath, "utf8", function (err, data) {
//     if (err) {
//       return console.log(err);
//     }

//     data = data.replace(/{{title}}/, "Sachin Verma");
//     data = data.replace(
//       /{{description}}/,
//       "Sachin Verma's personal site and blog"
//     );

//     res.send(data);
//   });
// });

app.use(express.static(path.resolve(__dirname, "./build")));

app.get("*", function (req, res) {
  console.log(req.body);
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.replace("__META_OG_TITLE__", "tEST Goal 3");
    data = data.replace("__META_DESCRIPTION__", "Donee goal detail");
    data = data.replace("__META_OG_DESCRIPTION__", "laptop");
    data = data.replace(
      "__META_OG_IMAGE__",
      "https://donee.s3.amazonaws.com/media/images/goal_images/photo-1488521787991-ed7bbaae773c_e4nGOZ5.jpeg"
    );
    res.send(data);
  });
});

{
  /* <meta name="description" content="__META_DESCRIPTION__"/>
<meta name="og:title" content="__META_OG_TITLE__"/>
<meta name="og:description" content="__META_OG_DESCRIPTION__"/>
<meta name="og:image" content="__META_OG_IMAGE__"/> */
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
