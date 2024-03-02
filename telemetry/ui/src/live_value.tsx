import "./App.css";

interface TemperatureProps {
  temp: number;
}

function LiveValue({ temp }: TemperatureProps) {
  let valueColour = "white";
  if (temp >= 25 || temp <= 75) {
    valueColour = "green";
  }
  if ((temp < 25 && temp >= 20) || (temp <= 80 && temp > 75)) {
    valueColour = "yellow";
  }
  if (temp < 20 || temp > 80) {
    valueColour = "red";
  }

  return (
    <header className="live-value" style={{ color: valueColour }}>
      {`${temp.toPrecision(3)}°C`}
    </header>
  );
}

export default LiveValue;
