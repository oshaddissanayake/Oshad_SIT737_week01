const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "index.html"));
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
