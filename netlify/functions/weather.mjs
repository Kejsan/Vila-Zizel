const forecastUrl = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=37.0084&lon=21.9695';
const userAgent = 'VilaZizelWeather/1.0 (https://vila-zizel.netlify.app/contact)';

function measurement(value) {
  return Number.isFinite(value) ? value : null;
}

export default async function weather(request) {
  if (request.method !== 'GET') {
    return new Response(null, { status: 405, headers: { Allow: 'GET' } });
  }

  try {
    const forecast = await fetch(forecastUrl, {
      headers: { Accept: 'application/json', 'User-Agent': userAgent },
      signal: AbortSignal.timeout(8000),
    });
    if (!forecast.ok) return new Response(null, { status: 502 });

    const data = await forecast.json();
    const times = data?.properties?.timeseries;
    if (!Array.isArray(times) || !times.length) return new Response(null, { status: 502 });

    const now = Date.now();
    const next = times.findIndex(({ time }) => Date.parse(time) > now);
    const reading = times[next < 0 ? times.length - 1 : Math.max(0, next - 1)];
    const details = reading?.data?.instant?.details;
    const temperature = measurement(details?.air_temperature);
    const humidity = measurement(details?.relative_humidity);
    const metresPerSecond = measurement(details?.wind_speed);
    if (temperature === null || humidity === null || metresPerSecond === null) {
      return new Response(null, { status: 502 });
    }

    const expires = Date.parse(forecast.headers.get('expires') || '');
    const maxAge = Number.isFinite(expires) ? Math.max(0, Math.floor((expires - now) / 1000)) : 300;
    return Response.json({
      temperature,
      humidity,
      windSpeed: metresPerSecond * 3.6,
      symbol: reading.data?.next_1_hours?.summary?.symbol_code ?? null,
    }, {
      headers: {
        'Cache-Control': `public, max-age=${maxAge}`,
        'Netlify-CDN-Cache-Control': `public, s-maxage=${maxAge}, durable`,
      },
    });
  } catch {
    return new Response(null, { status: 502 });
  }
}
