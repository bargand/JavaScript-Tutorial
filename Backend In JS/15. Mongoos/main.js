import mongoose from "mongoose";
const mongoose = require('mongoose');
import express from "express";
import { Todo } from "./models/Todo.js";

let con = await mongoose.connect("mongodb://localhost:27017/todo");

// const express = require('express')
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const todo = new Todo({
    title: "Python Crash Course",
    desc: "hey this is python advance cource",
    isDone: true,
  });
  todo.save();
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
