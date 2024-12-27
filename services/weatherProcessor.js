class WeatherProcessor {
    getCurrentWeather() {
        // Simulate weather data
        return {
            temperature: +(20 + Math.random() * 15).toFixed(1),
            humidity: +(40 + Math.random() * 40).toFixed(1),
            feelsLike: +(22 + Math.random() * 15).toFixed(1),
            timestamp: new Date().toISOString()
        };
    }
}

module.exports = { WeatherProcessor };
