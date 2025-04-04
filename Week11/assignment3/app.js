"use strict";

const http = require("http");
const fs = require("fs");
const chineseYear = require("chinese-year");  // Third-party module

const port = 3000;

http.createServer((req, res) => {
  // Set the response Content-Type to HTML
  res.setHeader("Content-Type", "text/html");

  // If the request URL includes "getyear", process the form submission
  if (req.url.includes("getyear")) {
    // Construct a URL object to parse query parameters
    let urlObj = new URL(`http://${req.headers.host}${req.url}`);
    // Retrieve the "year" parameter from the query string
    let year = urlObj.searchParams.get("year");
    // Use the current year if no valid input is provided
    year = year ? year : new Date().getFullYear();
    // Use the third-party module to get the zodiac animal
    const animal = chineseYear.getAnimal(year);

    // Log details to the console (for debugging)
    console.log("Request URL:", req.url);
    console.log("Parsed URL:", urlObj);
    console.log("Year parameter:", year);

    // Respond with the zodiac result
    res.statusCode = 200;
    res.write(`<h1>Chinese Year Calculator</h1>
      <p>${year} is the year of the ${animal}.</p>`);
    res.end();
  } else {
    // For all other requests, serve the index.html file
    fs.readFile("index.html", (error, data) => {
      if (error) {
        res.statusCode = 404;
        res.write("<h1>File Not Found</h1>");
        console.error("Error reading index.html:", error);
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
