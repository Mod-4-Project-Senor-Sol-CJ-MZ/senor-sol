export const getLocationData = async (zipCode = 11232) => {
  const zipcodeUrl = `https://api.zippopotam.us/us/${zipCode}`;
  const response = await fetch(zipcodeUrl);
  if (!response.ok) {
    throw new Error(`Error fetching data from Zippopotam API: ${response.status}`);
  }
  const data = await response.json();
  // console.log(data)
  const place = data.places[0];
  const latitude = place.latitude;
  const longitude = place.longitude;
  const city = place['place name'];
  const state = place['state abbreviation'];
  // console.log({ latitude, longitude, city, state })
  return { latitude, longitude, city, state };
}

export const getSunriseSunset = async (latitude, longitude, date) => {
  const sunriseSunsetUrl = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=${date}&formatted=0`;
  const response = await fetch(sunriseSunsetUrl);
  if (!response.ok) {
    throw new Error(`Error fetching data from Sunrise-Sunset API: ${response.status}`);
  }
  const data = await response.json();
  const sunrise = data.results.sunrise;
  const sunset = data.results.sunset;
  return { sunrise, sunset };
}

export const getSunriseSunsetMoreInfo = async (latitude, longitude, date) => {
  const moreInfoUrl = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=${date}&formatted=0`;
  const response = await fetch(moreInfoUrl);
  if (!response.ok) {
    throw new Error(`Error fetching data from Sunrise-Sunset API: ${response.status}`);
  }
  const data = await response.json();
  const {
    solar_noon: solarNoon,
    day_length: dayLength,
    civil_twilight_begin: civilTwilightBegin,
    civil_twilight_end: civilTwilightEnd,
    nautical_twilight_begin: nauticalTwilightBegin,
    nautical_twilight_end: nauticalTwilightEnd,
    astronomical_twilight_begin: astTwilightBegin,
    astronomical_twilight_end: astTwilightEnd,
  } = data.results;
  return { solarNoon, dayLength, civilTwilightBegin, civilTwilightEnd, nauticalTwilightBegin, nauticalTwilightEnd, astTwilightBegin, astTwilightEnd };
}