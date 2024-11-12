import express from "express";
import path from "path";
import db from "./config/connection.js";
import routes from "./routes/index.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the client's dist folder
app.use(express.static(path.resolve(__dirname, "../../client/dist")));

app.use(routes);

// Catch-all route for client-side routing
app.get("*", (_req, res) => {
  res.sendFile(path.resolve(__dirname, "../../client/dist/index.html"));
});

// Error handling for the database connection
db.on("error", (err) => {
  console.error("Database connection error:", err);
});

db.once("open", () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
