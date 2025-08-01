const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Dummy intern data
const internData = {
  name: "Ronak Dotasara",
  referralCode: "RDK2025",
  donations: 1500,
  rewards: ["T-shirt", "Certificate", "LinkedIn Shoutout"]
};

const leaderboard = [
  { name: "Ronak", donations: 1500 },
  { name: "Sampati", donations: 1200 },
  { name: "Aarya", donations: 1000 }
];

// Routes
app.get('/api/intern', (req, res) => {
  res.json(internData);
});

app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboard);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

