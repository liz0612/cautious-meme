const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, "client", "dist")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Fallback route to serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));