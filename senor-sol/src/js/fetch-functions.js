// // function to fetch location data based on provided zip code 
export const getLocationData = async (zipCode) => {
  const zipcodeUrl = `https://api.zippopotam.us/us/${zipCode}`;
  try {
    const response = await fetch(zipcodeUrl);
    if (!response.ok) {
      throw new Error(`Error fetching data from Zippopotam API: ${response.status}`);
    }
    const data = await response.json();
    const place = data.places[0];
    const latitude = place.latitude;
    const longitude = place.longitude;
    const city = place['place name'];
    const state = place['state abbreviation'];
    // return destructured variables to reuse in other functions 
    return { latitude, longitude, city, state };
  } catch (error) {
    console.warn('Warning in getLocationData:', error);
    throw error;
  }
}

// function to fetch sunrise and sunset times using lat, long, and date 
export const getSunriseSunset = async (latitude, longitude, date) => {
  const sunriseSunsetUrl = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=${date}&formatted=0`;
  try {
    const response = await fetch(sunriseSunsetUrl);
    if (!response.ok) {
      throw new Error(`Error fetching data from Sunrise-Sunset API: ${response.status}`);
    }
    const data = await response.json();
    const sunrise = data.results.sunrise;
    const sunset = data.results.sunset;
    // return destructured variables to reuse in other functions 
    return { sunrise, sunset };
  } catch (error) {
    console.warn('Warning in getSunriseSunset:', error);
    throw error;
  }
}

// function to fetch more information (provided alongside sunrise/sunset) using lat, long, and date
  // broke up into different functions as will use in different parts 
export const getSunriseSunsetMoreInfo = async (latitude, longitude, date) => {
  const moreInfoUrl = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=${date}&formatted=0`;
  try {
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
    // return destructured variables to reuse in other functions 
    return { solarNoon, dayLength, civilTwilightBegin, civilTwilightEnd, nauticalTwilightBegin, nauticalTwilightEnd, astTwilightBegin, astTwilightEnd };
  } catch (error) {
    console.warn('Warning in getSunriseSunsetMoreInfo:', error);
    throw error;
  }
}



