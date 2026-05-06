import { motion, AnimatePresence } from 'motion/react';
import { Sun, CloudSun, Cloud, CloudRain, CloudLightning, Droplets, Wind } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function WeatherWidget() {
  const { weather, t } = useApp();

  return (
    <AnimatePresence>
      {weather && (
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed right-10 top-28 z-[140] hidden flex-col gap-2 pointer-events-auto sm:flex"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-alabaster/85 backdrop-blur-xl border border-divine/20 p-3 sm:p-5 rounded-[2rem] shadow-glass flex flex-col gap-3 min-w-[112px] sm:min-w-[180px]"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col">
                <span className="font-mythic text-[7px] sm:text-[8px] uppercase tracking-widest text-laurel opacity-80 leading-none mb-1">
                  {t.weather.title}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-3xl font-serif text-obsidian leading-none">
                    {Math.round(weather.current_weather.temp_c || weather.current_weather.temperature)}
                  </span>
                  <span className="text-base sm:text-xl font-serif text-divine">°C</span>
                </div>
              </div>
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-divine/10 rounded-2xl sm:rounded-3xl flex items-center justify-center">
                {(() => {
                  const code = weather.current_weather.weathercode;
                  if (code <= 1) return <Sun className="w-5 h-5 sm:w-7 sm:h-7 text-divine" />;
                  if (code <= 3) return <CloudSun className="w-5 h-5 sm:w-7 sm:h-7 text-laurel" />;
                  if (code <= 48) return <Cloud className="w-5 h-5 sm:w-7 sm:h-7 text-laurel" />;
                  if (code <= 67) return <CloudRain className="w-5 h-5 sm:w-7 sm:h-7 text-laurel" />;
                  return <CloudLightning className="w-5 h-5 sm:w-7 sm:h-7 text-divine" />;
                })()}
              </div>
            </div>
            
            <div className="hidden sm:flex flex-col gap-2 pt-3 border-t border-obsidian/10">
              <div className="flex items-center justify-between text-[7px] font-bold uppercase tracking-widest">
                <div className="flex items-center gap-1.5 text-laurel">
                  <Droplets className="w-2.5 h-2.5" />
                  <span>{t.weather.humidity}</span>
                </div>
                <span className="text-obsidian">{weather.relative_humidity_2m || 65}%</span>
              </div>
              <div className="flex items-center justify-between text-[7px] font-bold uppercase tracking-widest">
                <div className="flex items-center gap-1.5 text-laurel">
                  <Wind className="w-2.5 h-2.5" />
                  <span>{t.weather.wind}</span>
                </div>
                <span className="text-obsidian">{Math.round(weather.current_weather.windspeed || 5)} km/h</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
