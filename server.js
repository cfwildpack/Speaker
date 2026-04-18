const express = require('express');
const app = express();
const port = 3000;

app.get('/status', (req, res) => {
    res.json({
        speaker: "NovaSound X100",
        status: "Online",
        volume: 50
    });
});

app.listen(port, () => {
    console.log(`Speaker server running at http://localhost:${port}`);
});
