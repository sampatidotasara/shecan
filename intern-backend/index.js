const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Intern Backend is Running 🚀");
});

app.get("/api/intern", (req, res) => {
  res.json({
    name: "Ronak Dotasara",
    referralCode: "RDK2025",
    donations: 1500,
    rewards: ["T-shirt", "Certificate", "LinkedIn Shoutout"]
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

