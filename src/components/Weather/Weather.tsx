import { WeatherType } from '@/types/weather';
import { useEffect, useState } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState<WeatherType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getWeather = async () => {
      const res = await fetch(
        'http://api.weatherapi.com/v1/current.json?key=' +
          process.env.NEXT_PUBLIC_ENV_WEATHER_API_KEY +
          '&q=Berlin&aqi=no'
      );
      const data = await res.json();
      setWeather(data);
    };
    getWeather();
  }, []);

  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-4 border rounded-lg'>
      <p className='text-4xl font-bold'>{weather?.current.temp_c}°C</p>
      <p className='text-lg'>{weather?.current.condition.text}</p>
    </div>
  );
};

export default Weather;
