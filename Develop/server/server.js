const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'client', 'dist')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve index.html for all other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));