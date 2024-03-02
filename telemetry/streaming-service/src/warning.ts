let time1 = -1;
let time2 = -1;
let time3 = -1;

interface VehicleData {
    battery_temperature: number;
    timestamp: number;
}

export const TemWarning = (jsonData: VehicleData) => {
    const temperature = jsonData.battery_temperature;
    const time = jsonData.timestamp;
    if (temperature < 20 || temperature > 80) {
        if (time1 === -1) {
            time1 = time;
            return;
        }
        if (time2 === -1) {
            time2 = time;
            return;
        }
        if (time3 === -1) {
            time3 = time;
            return;
        }
        if (time - time1 < 5000) {
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!');
        }
        time1 = time2;
        time2 = time3;
        time3 = time;
    }
}
