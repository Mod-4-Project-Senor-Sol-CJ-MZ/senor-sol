// functions to get default lat and long of current user


// export const userDefaultLatnLong = () => {
//   if (!navigator.geolocation) return { latitude: 0, longitude: 0 }
  
//   const success = pos => {
//     const { latitude, longitude } = pos.coords 
//     return { latitude, longitude }
//   }
//   const error = err => console.warn(`ERROR(${err.code}): ${err.message}`);
//   navigator.geolocation.getCurrentPosition(pos => {
//       const { latitude, longitude } = pos.coords 
//       return { latitude, longitude }
//   }, error);
// }

export const userDefaultLatnLong = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      resolve({ latitude: 0, longitude: 0 });
      return;
    }

    const success = pos => {
      const { latitude, longitude } = pos.coords;
      resolve({ latitude, longitude });
    };

    const error = err => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      resolve({ latitude: 0, longitude: 0 });
    };

    navigator.geolocation.getCurrentPosition(success, error);
  });
}


export const getDefaultSunriseSunset = async (latLongObj) => {
  const latitude = latLongObj.latitude
  const longitude = latLongObj.longitude
  const sunriseSunsetUrl = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today&formatted=0`;
  try {
    const response = await fetch(sunriseSunsetUrl);
    if (!response.ok) {
      throw new Error(`Error fetching data from Sunrise-Sunset API: ${response.status}`);
    }
    const data = await response.json();
    const sunrise = new Date(data.results.sunrise)
    // const sunrise = data.results.sunrise;
    const sunset = new Date(data.results.sunset)
    // const sunset = data.results.sunset;
    // console.log(sunrise, sunset)
    const sunrise1 = sunrise.toLocaleTimeString('en-US')
    const sunset1 = sunset.toLocaleTimeString('en-US')

    console.log(sunrise1, sunset1)

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${year}-${month}-${day}`;
  console.log(currentDate); // "17-6-2022"
    // return destructured variables to reuse in other functions 
    const sunRiseSetDateObj = { sunrise1, sunset1, currentDate }
    return sunRiseSetDateObj;
  } catch (error) {
    console.warn('Warning in getSunriseSunset:', error);
    throw error;
  }
}

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



