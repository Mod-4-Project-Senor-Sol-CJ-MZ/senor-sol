import { getLocationData, getSunriseSunset, getSunriseSunsetMoreInfo } from './fetch-functions';
import { convertToTimezone } from './helper-functions';

export const defaultContainerDiv = async (latLongObj, sunRiseSetDateObj) => {
  const ul = document.getElementById("default-info");
  // ul.innerHTML = ``;
  console.log(latLongObj, sunRiseSetDateObj)
  


  
  // const zipcode = document.createElement("li");
  // zipcode.classList.add("default-zipcode")
  // zipcode.textContent = `Zipcode: ${formObj.zipcode}`;

  const date = document.createElement("li");
  date.classList.add("default-date")
  date.textContent = `Date: ${sunRiseSetDateObj.currentDate}`;
  // console.log('testttt', `Date: ${sunRiseSetDateObj.currentDate}`)

  // const timezone = document.createElement("li");
  // date.classList.add("default-timezone")
  // timezone.textContent = `Timezone: ${formObj.timezone}`;

  // const location = document.createElement("li");
  // location.classList.add("default-location")

  const coords = document.createElement("li");
  coords.classList.add("default-coords")

  const sunrise = document.createElement("li");
  sunrise.classList.add("default-sunrise");

  const sunset = document.createElement("li");
  sunset.classList.add("default-sunset");

  ul.append(date, coords, sunrise, sunset);

  try {
    // fetch location data using provided zip code 
    // const { latitude, longitude, city, state } = await getLocationData(formObj.zipcode);

    // location.textContent = `Location: ${city}, ${state} ${formObj.zipcode}`;
    coords.textContent = `Latitude, Longitude: ${latLongObj.latitude}, ${latLongObj.longitude}`;
    
    // fetch sunrise/sunset time using lat, long, and date 
    // const { sunrise: sunriseTime, sunset: sunsetTime } = await getSunriseSunset(latitude, longitude, formObj.date);
    
    sunrise.textContent = "Sunrise: " + `${sunRiseSetDateObj.sunrise1}`;
    sunset.textContent = "Sunset: " + `${sunRiseSetDateObj.sunset1}`;
  } catch (error) {
    console.warn(error);
  }
};

