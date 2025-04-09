"use strict";

  const express = require("express"),
      app = express(),
      animalController = require("./controllers/animalController"),
      homeController = require("./controllers/homeController");
  
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

// rest of code will go here

app.listen(app.get("port"), () => {
  console.log(`Server running on http://localhost:${app.get("port")}`);
});

// route get requests to index page
app.get("/zodiac/index", homeController.renderIndex);

app.use(
    express.urlencoded({
      extended: false
    })
  );

  app.use("/zodiac/getyear", animalController.getAnimal);

  app.post("/zodiac/getyear", homeController.renderResult);