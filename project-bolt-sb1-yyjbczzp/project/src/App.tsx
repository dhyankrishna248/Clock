import React, { useState, useEffect } from 'react';
import { Sun, Wind } from 'lucide-react';

function Clock() {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-[#1a1b26] text-white flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Weather Widget */}
        <div className="absolute top-8 right-8 bg-[#232433] p-6 rounded-xl">
          <div className="flex items-start justify-between gap-4">
            <div className="text-right">
              <div className="text-6xl font-light mb-1">32°C</div>
              <div className="text-gray-400 mb-3">HAZE</div>
              <div className="text-sm text-gray-400">
                <div>HUMIDITY: 74%</div>
                <div>WIND: 11 KM/H</div>
                <div>TECHNOPARK,TN</div>
              </div>
            </div>
            <Sun className="w-8 h-8 text-[#4ade80] flex-shrink-0" />
          </div>
        </div>

        {/* Clock */}
        <div className="text-center">
          <h1 className="text-[12rem] font-serif tracking-wider leading-none">
            {formatTime(time)}
          </h1>
          <h2 className="text-2xl tracking-[0.3em] mt-8">
            {formatDate(time)}
          </h2>

          {/* Mode Toggles */}
          <div className="mt-12 flex justify-center gap-4">
            <button className="bg-[#232433] px-6 py-3 rounded-lg flex items-center gap-2">
              <span className="material-icons">schedule</span>
              12/24 HOUR
            </button>
            <button className="bg-[#232433] px-6 py-3 rounded-lg flex items-center gap-2">
              <Sun className="w-5 h-5" />
              BRIGHTNESS
            </button>
          </div>

          {/* Color Palette */}
          <div className="mt-8 flex justify-center gap-4">
            {['#ef4444', '#f97316', '#facc15', '#4ade80', '#60a5fa', '#a855f7'].map((color) => (
              <button
                key={color}
                className="w-8 h-8 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clock;