const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

let posts = [];

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.render("index", { posts });
});

app.get("/create", (req, res) => {
  res.render("create");
});

app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  const id = posts.length;
  posts.push({ id, title, content });
  res.redirect("/");
});

app.get("/posts/:id", (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  if (post) {
    res.render("post", { post });
  } else {
    res.status(404).render("404");
  }
});

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
