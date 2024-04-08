import { useEffect, useState } from "react";

export default function Weather() {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(
            "https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=O6hIIKUOhewW3VNl4A3fPj2skP32Ws3c"
        )
        .then((res) => res.json())
        .then((data) => setWeather(data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }, []);

    // Check if weather is not null before accessing its properties
    if (!weather) {
        return <div>Loading...</div>;
    }

    // Assuming weather has loaded successfully
    console.log(
        weather.timelines.daily[0].values.temperatureAvg,
        weather.timelines.daily[0].values.pressureSurfaceLevelAvg,
        weather.timelines.daily[0].values.windSpeedAvg,
        weather.timelines.daily[0].values.humidityAvg
    );

    return (
        <div>
            <h1>Weather</h1>
          
        
        </div>
    );
}
