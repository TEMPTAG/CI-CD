import db from "../config/connection.js";
import Question from "../models/Question.js";
import cleanDB from "./cleanDb.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Define __dirname for ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pythonQuestions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "./pythonQuestions.json"), "utf-8")
);

db.once("open", async () => {
  await cleanDB("Question", "questions");

  await Question.insertMany(pythonQuestions);

  console.log("Questions seeded!");
  process.exit(0);
});
