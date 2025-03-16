const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});


// Handle a GET request at a custom route (example: /hello)
app.get('/hello', (req, res) => {
    res.send('Hello! This is a response from the /hello route.');
});

// Handle a GET request with query parameters (example: /greet?name=John)
app.get('/greet', (req, res) => {
    const name = req.query.name || 'Guest';
    res.send(`Hello, ${name}! Welcome to my simple Node.js server.`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});