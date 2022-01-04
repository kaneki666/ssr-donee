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
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.replace("__META_OG_TITLE__", "Sachin Verma");
    data = data.replace(
      "__META_DESCRIPTION__",
      "Sachin Verma's personal site and blog"
    );
    data = data.replace("__META_OG_DESCRIPTION__", "goal");
    data = data.replace(
      "__META_OG_IMAGE__",
      "https://images.unsplash.com/photo-1625034892070-6a3cc12edb42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=766&q=80"
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
