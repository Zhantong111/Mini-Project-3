"use strict";

const Models = require("../models");

const getPost = (res) => {
  Models.Post.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const createPost = (data, res) => {
  Models.Post.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  getPost,
  createPost,
};
