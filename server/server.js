const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

const DATA_DIR = path.join(__dirname, 'data'); 

const readJsonFile = (filename) => {
    try {
        const filePath = path.join(DATA_DIR, `${filename}.json`);
        if (!fs.existsSync(filePath)) {
            return { error: 'File not found' };
        }
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return { error: 'Error reading file' };
    }
};

// Endpoint to get dashboard data
app.get('/api/dashboard', (req, res) => {
    const data = readJsonFile('dashboard');
    res.json(data);
});

// Endpoint to get log data
app.get('/api/log', (req, res) => {
    const data = readJsonFile('log');
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
