// Minimal static file server for the Money Personality Quiz.
// Serves everything in /public. Render (and most Node hosts) set process.env.PORT.

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

// Fallback to index.html for any other route (keeps things simple if you
// later add client-side routes).
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Money Personality Quiz running on port ${PORT}`);
});
