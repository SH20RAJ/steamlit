const ws = new WebSocket(`ws://${window.location.host}`);

// DOM Elements
const tempSlider = document.getElementById('tempSlider');
const tempValue = document.getElementById('tempValue');
const powerMode = document.getElementById('powerMode');
const currentTemp = document.getElementById('currentTemp');
const currentHumidity = document.getElementById('currentHumidity');
const feelsLike = document.getElementById('feelsLike');
const acStatus = document.getElementById('acStatus');
const powerConsumption = document.getElementById('powerConsumption');

// Update controls
tempSlider.addEventListener('input', () => {
    tempValue.textContent = `${tempSlider.value}°C`;
    sendControlUpdate();
});

powerMode.addEventListener('change', sendControlUpdate);

function sendControlUpdate() {
    ws.send(JSON.stringify({
        type: 'control',
        targetTemp: Number(tempSlider.value),
        powerMode: powerMode.value
    }));
}

// WebSocket handlers
ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    
    if (data.type === 'update') {
        currentTemp.textContent = `${data.weather.temperature}°C`;
        currentHumidity.textContent = `${data.weather.humidity}%`;
        feelsLike.textContent = `${data.weather.feelsLike}°C`;
        sendControlUpdate();
    } else if (data.type === 'status') {
        acStatus.textContent = `Status: ${data.status.status}`;
        powerConsumption.textContent = `Power Consumption: ${data.status.powerConsumption}W`;
    }
};

ws.onerror = (error) => {
    console.error('WebSocket error:', error);
};

ws.onclose = () => {
    console.log('WebSocket connection closed');
};
