import React from 'react';
import { Wind } from 'lucide-react';
import { CloudRainWind } from 'lucide-react';
import { SunMedium } from 'lucide-react';
import { Moon } from 'lucide-react';
import { convertTime } from '../../utils/utils';
const Card = ({ data }) => {
  return (
    <div className="w-96 bg-blue-700 border-2 border-blue-900 rounded-xl mt-36 p-4 flex flex-col gap-8">
      <div className="flex justify-center">
        <span className="text-xl text-black">
          {data.name}&nbsp;[
          <span className="text-white">"{data.sys.country}"</span>]
        </span>
      </div>
      <div className="flex justify-between ">
        <div className="flex flex-col gap-2">
          <span className="text-xl text-white font-bold">
            Temp: {data.main.temp} &deg;C
          </span>
          <span className="text-md text-white font-bold">
            Real feel: {data.main.feels_like} &deg;C
          </span>
          <span className="text-sm text-white font-bold">
            Humidity: {data.main.humidity} %
          </span>
        </div>
        <div className="flex flex-col gap-2 items-end">
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt=""
            className="w-10 h-auto aspect-auto"
          />
          <span className="text-white">{data.weather[0].description}</span>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-white flex">
            Sunrise&nbsp; <SunMedium className="text-yellow-300" />
          </span>
          <span className="text-white"> {convertTime(data.sys.sunrise)}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-white flex">
            Sunset &nbsp;
            <Moon className="text-gray-300" />
          </span>
          <span className="text-white"> {convertTime(data.sys.sunset)}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
