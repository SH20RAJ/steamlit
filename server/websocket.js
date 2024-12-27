const WebSocket = require('ws');

function setupWebSocket(server) {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws) => {
        console.log('New client connected');

        // Send initial data
        sendWeatherUpdate(ws);
        sendStatusUpdate(ws);

        // Handle incoming messages
        ws.on('message', (message) => {
            const data = JSON.parse(message);
            if (data.type === 'control') {
                handleControlUpdate(data);
                // Broadcast new status to all clients
                sendStatusUpdate(ws);
            }
        });

        ws.on('close', () => {
            console.log('Client disconnected');
        });
    });
}

function sendWeatherUpdate(ws) {
    const weatherData = {
        type: 'update',
        weather: {
            temperature: getCurrentTemperature(),
            humidity: getCurrentHumidity(),
            feelsLike: calculateFeelsLike()
        }
    };
    ws.send(JSON.stringify(weatherData));
}

function sendStatusUpdate(ws) {
    const statusData = {
        type: 'status',
        status: {
            status: getACStatus(),
            powerConsumption: calculatePowerConsumption()
        }
    };
    ws.send(JSON.stringify(statusData));
}

// Mock functions - replace with actual implementations
function getCurrentTemperature() { return 25; }
function getCurrentHumidity() { return 60; }
function calculateFeelsLike() { return 26; }
function getACStatus() { return 'Running'; }
function calculatePowerConsumption() { return 800; }
function handleControlUpdate(data) {
    console.log('Received control update:', data);
    // Implement AC control logic here
}

module.exports = setupWebSocket;
