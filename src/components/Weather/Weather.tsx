import { WeatherResponseType } from '@/types/weather';
import { useEffect, useState } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState<WeatherResponseType | null>(null);

  useEffect(() => {
    const getWeather = async () => {
      const res = await fetch('/api/weather');
      const data = await res.json();
      setWeather(data);
    };
    getWeather();
  }, []);

  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-4 border min-w-[375px] rounded-lg flex-row flex justify-between'>
      <div>
        <p className='text-4xl font-bold text-turfGreen '>
          {weather?.current.current.temp_c}°C
        </p>
        <p className='text-lg'>{weather?.current.current.condition.text}</p>
      </div>
      <div>
        <p className='text-2xl text-right text-turfGreen'>
          {weather?.forecast.forecast.forecastday[0].day.totalprecip_mm} mm
        </p>
        <p className='text-right'>Expected Precipitation </p>
      </div>
    </div>
  );
};

export default Weather;
