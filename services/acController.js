class ACController {
    constructor() {
        this.powerConsumptionRates = {
            high: 2000,
            medium: 1500,
            low: 1000,
            off: 0
        };
    }

    getStatus(currentTemp, targetTemp, powerMode) {
        if (powerMode === 'Off') {
            return {
                status: 'OFF',
                powerConsumption: this.powerConsumptionRates.off
            };
        }

        let powerLevel = 'high';
        if (powerMode === 'Auto') {
            const tempDiff = Math.abs(currentTemp - targetTemp);
            if (tempDiff > 5) {
                powerLevel = 'high';
            } else if (tempDiff > 2) {
                powerLevel = 'medium';
            } else {
                powerLevel = 'low';
            }
        }

        return {
            status: `Running (${powerLevel.toUpperCase()})`,
            powerConsumption: this.powerConsumptionRates[powerLevel]
        };
    }
}

module.exports = { ACController };
