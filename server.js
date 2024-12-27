const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');
const { WeatherProcessor } = require('./services/weatherProcessor');
const { ACController } = require('./services/acController');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const weatherProcessor = new WeatherProcessor();
const acController = new ACController();

app.use(express.static('public'));

wss.on('connection', (ws) => {
    console.log('Client connected');

    const sendUpdate = () => {
        const weatherData = weatherProcessor.getCurrentWeather();
        ws.send(JSON.stringify({
            type: 'update',
            weather: weatherData
        }));
    };

    // Send initial data
    sendUpdate();

    // Handle incoming messages
    ws.on('message', (message) => {
        const data = JSON.parse(message);
        if (data.type === 'control') {
            const status = acController.getStatus(
                weatherProcessor.getCurrentWeather().temperature,
                data.targetTemp,
                data.powerMode
            );
            ws.send(JSON.stringify({
                type: 'status',
                status: status
            }));
        }
    });

    // Update weather periodically
    const interval = setInterval(sendUpdate, 5000);

    ws.on('close', () => {
        clearInterval(interval);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
