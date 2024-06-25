import './style.css'


const getLocationData = async (zipCode) => {
  const zipcodeUrl = `https://api.zippopotam.us/us/${zipCode}`;
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
  return { latitude, longitude, city, state };
}

const getSunriseSunset = async (latitude, longitude, date) => {
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

const createForm = () => {
  `
  <label for='zipcode'
  `
}


// const getSunriseSunsetMoreInfo = async (latitude, longitude, date) => {
  //   const sunriseSunsetUrl = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=${date}&formatted=0`;
  //   const response = await fetch(sunriseSunsetUrl);
  //   if (!response.ok) {
    //     throw new Error(`Error fetching data from Sunrise-Sunset API: ${response.status}`);
    //   }
    //   const data = await response.json();
    
    //   return { };
    // }
    
  //   const main = async () => {
  //     const zipCode = prompt("Enter a US ZIP code:");
  //     const date = prompt("Enter a date (YYYY-MM-DD):");
  //     const timeZone = prompt("Enter a time zone:");
  //     try {
  //   const { latitude, longitude, city, state } = await getLocationData(zipCode);
  //     const { sunrise, sunset } = await getSunriseSunset(latitude, longitude, date);
  //     console.log(`Location: ${city}, ${state} ${zipCode}`);
  //     console.log(`Date: ${date}`);
  //     console.log(`Sunrise: ${new Date(sunrise).toLocaleTimeString()}`);
  //     console.log(`Sunset: ${new Date(sunset).toLocaleTimeString()}`);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  
  main();
  
  
  // const testRoute = async (url) => {
    //   const response = await fetch(url)
    //   const data = await response.json()
  //   console.log('data:', data);
  // }
  
  // const testRoute2 = async (url) => {
    //   const response = await fetch(url)
    //   const data = await response.json()
    //   console.log('data:', data);
    //   // console.log('data:', data.results.sunrise, data.results.sunset);
    // }
    
    
  // const url1 = 'http://api.zippopotam.us/us/90210';
  // // const url2 = 'https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400';
  // const url2 = `https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=2023-06-25`
  // // const url2 = `https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today`
  // testRoute(url1);
  // testRoute2(url2);
  
  // const getSunriseSunset = async (latitude, longitude, timeZone, date) => {
  //   const sunriseSunsetUrl = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&tzid=${timeZone}date=${date}&formatted=0`;
  //   const response = await fetch(sunriseSunsetUrl);
  //   if (!response.ok) {
  //     throw new Error(`Error fetching data from Sunrise-Sunset API: ${response.status}`);
  //   }
  //   const data = await response.json();
  //   const sunrise = data.results.sunrise;
  //   const sunset = data.results.sunset;
  //   return { sunrise, sunset };
  // }