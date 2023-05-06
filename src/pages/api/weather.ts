// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { WeatherResponseType } from '@/types/weather';
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WeatherResponseType>
) {
    const current = await fetch(
        'http://api.weatherapi.com/v1/current.json?key=' +
          process.env.WEATHER_API_KEY +
          '&q=Berlin&aqi=no'
      );
    const currentResponse = await current.json();

    const forecast = await fetch(
        'http://api.weatherapi.com/v1/forecast.json?key=' +
          process.env.WEATHER_API_KEY +
          '&q=Berlin&days=3&aqi=no&alerts=no'
      );
    const forecastResponse = await forecast.json();

  res.status(200).json({ current: currentResponse, forecast: forecastResponse})
}
