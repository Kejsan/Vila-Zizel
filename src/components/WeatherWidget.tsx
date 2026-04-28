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
          className="fixed top-24 sm:top-28 right-4 sm:right-10 z-[140] flex flex-col gap-2 pointer-events-none sm:pointer-events-auto"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white/70 backdrop-blur-xl border border-white/50 p-3 sm:p-5 rounded-[2rem] shadow-2xl flex flex-col gap-3 min-w-[120px] sm:min-w-[180px]"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col">
                <span className="text-[7px] sm:text-[8px] uppercase tracking-widest text-[#8C7B60] font-bold opacity-70 leading-none mb-1">
                  {t.weather.title}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-3xl font-serif text-[#4A453E] leading-none">
                    {Math.round(weather.current_weather.temp_c || weather.current_weather.temperature)}
                  </span>
                  <span className="text-base sm:text-xl font-serif text-[#E25A89]">°C</span>
                </div>
              </div>
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-[#E25A89]/10 to-orange-100 rounded-2xl sm:rounded-3xl flex items-center justify-center">
                {(() => {
                  const code = weather.current_weather.weathercode;
                  if (code <= 1) return <Sun className="w-5 h-5 sm:w-7 sm:h-7 text-orange-400" />;
                  if (code <= 3) return <CloudSun className="w-5 h-5 sm:w-7 sm:h-7 text-[#8C7B60]" />;
                  if (code <= 48) return <Cloud className="w-5 h-5 sm:w-7 sm:h-7 text-stone-400" />;
                  if (code <= 67) return <CloudRain className="w-5 h-5 sm:w-7 sm:h-7 text-blue-400" />;
                  return <CloudLightning className="w-5 h-5 sm:w-7 sm:h-7 text-purple-400" />;
                })()}
              </div>
            </div>
            
            <div className="hidden sm:flex flex-col gap-2 pt-3 border-t border-[#4A453E]/5">
              <div className="flex items-center justify-between text-[7px] font-bold uppercase tracking-widest">
                <div className="flex items-center gap-1.5 text-[#8C7B60]">
                  <Droplets className="w-2.5 h-2.5" />
                  <span>{t.weather.humidity}</span>
                </div>
                <span className="text-[#4A453E]">{weather.relative_humidity_2m || 65}%</span>
              </div>
              <div className="flex items-center justify-between text-[7px] font-bold uppercase tracking-widest">
                <div className="flex items-center gap-1.5 text-[#8C7B60]">
                  <Wind className="w-2.5 h-2.5" />
                  <span>{t.weather.wind}</span>
                </div>
                <span className="text-[#4A453E]">{Math.round(weather.current_weather.windspeed || 5)} km/h</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
