// // *********************************************************************************
// // Server.js - This file is the initial starting point for the Node/Express server.
// // *********************************************************************************

// // Dependencies
// // =============================================================
// var express = require("express");
// var bodyParser = require("body-parser");
// var path = require("path");
// var React = require("react");
// var ReactDOM = require("react-dom");
// var http = require("http");
// var fs = require("fs");


// // Sets up the Express App
// // =============================================================
// var app = express();
// var PORT = process.env.PORT || 8081;

// // Sets up the Express app to handle data parsing

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));
// // parse application/json
// app.use(bodyParser.json());

// // Static directory
// app.use(express.static("app/public"));

// // Playing with directories in here.
// // This should get us to the first page
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "./app/public/index.html"))
// })

// // And this to the second
// app.get("/link", function(req, res) {
//   res.sendFile(path.join(__dirname, "./app/public/link.html"))
// })

// // // And this to the third
// // app.get("/end", function(req, res) {
// //   res.sendFile(path.join(__dirname, "./app/public/end.html"))
// // })


// // Routes
// // =============================================================
// require("./app/routes/api-routes.js")(app);

// // React Components
// // ============================
// // class MyComponent extends React.Component {
// //   render() {
// //     return <div> Hello World </div>;
// //   }
// // }

// // React.DOM.render(<MyComponent />, node);
// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });
