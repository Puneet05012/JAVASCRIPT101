const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const slides = [
    "1_intro.js",
    "2_Datatype.js",
    "3_var_let_const.js",
    "4_async_await.js",
    "5_control_structure.js",
    "6_dom.html",
    "settingUpJS.js",
  ];

  res.render("index", { slides });
});


app.get("/slides/:slideId", (req, res) => {
  const slideId = req.params.slideId;
  const filePath = path.join(__dirname, "slides", `${slideId}.js`);

  if (slideId === "6_dom") { 
    const htmlFilePath = path.join(__dirname, "slides", `${slideId}.html`);
    if (fs.existsSync(htmlFilePath)) {
      res.sendFile(htmlFilePath); 
    } else {
      res.status(404).send("Slide not found");
    }
  } else {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      res.render("slide", { slideId, content });
    } else {
      res.status(404).send("Slide not found");
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
