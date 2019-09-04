const express = require('express');

const server = express();


server.use(express.json());

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url}]`
  );
  next();
};

function validateUserId(req, res, next) {
  const { id } = req.params;

}

module.exports = server;
