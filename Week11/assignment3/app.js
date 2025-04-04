"use strict";

const http = require("http");
const fs = require("fs");
const chineseYear = require("chinese-year"); // Third-party module
const chat = require("./modules/chat");       // Your custom chat module
const port = 3000;

http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  // Route for processing the Chinese zodiac calculator
  if (req.url.includes("getyear")) {
    const urlObj = new URL(`http://${req.headers.host}${req.url}`);
    let year = parseInt(urlObj.searchParams.get("year"), 10) || new Date().getFullYear();

    // Calculate the previous and next years
    const prevYear = year - 1;
    const nextYear = year + 1;

    // Get zodiac animals for the years
    const prevAnimal = chineseYear.getAnimal(prevYear);
    const currAnimal = chineseYear.getAnimal(year);
    const nextAnimal = chineseYear.getAnimal(nextYear);

    res.statusCode = 200;
    res.write(`
      <h1>Chinese Year Calculator</h1>
      <p>Chinese Year ${prevYear} was year of the ${prevAnimal}.</p>
      <p>Chinese Year ${year} is year of the ${currAnimal}.</p>
      <p>Chinese Year ${nextYear} will be year of the ${nextAnimal}.</p>
    `);
    res.end();

  // Route for the chat module output
  } else if (req.url.includes("chat")) {
    res.statusCode = 200;
    res.write(`
      <h1>Chat Module Output</h1>
      <p>${chat.hi}</p>
      <p>${chat.conversation.greet("Mayamba")}</p>
      <p>${chat.conversation.give(2)}</p>
      <p>${chat.bye()}</p>
    `);
    res.end();

  // Default: serve index.html for all other routes
  } else {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.write("<h1>File Not Found</h1>");
      } else {
        res.statusCode = 200;
        res.write(data);
      }
      res.end();
    });
  }
}).listen(port, () => {
  console.log(`Server running on port ${port}`);
});
