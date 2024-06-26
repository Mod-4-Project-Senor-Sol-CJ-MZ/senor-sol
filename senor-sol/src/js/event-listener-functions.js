// importing functions to use in form submission handling
  // getLocationData & getSunriseSunset
    // will use getSunriseSunsetMoreInfo in eventListener for button after dom/render
import { getLocationData, getSunriseSunset, getSunriseSunsetMoreInfo } from './fetch-functions';

// function to handle form submission 
export const handleSubmit = async (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);

  // console.log('Form Data:', formObj);

  const zipcodeValue = document.getElementById("results-zipcode");
  zipcodeValue.textContent = "Zipcode: " + formObj.zipcode;

  const isValidZipcode = await validateZipcode(formObj.zipcode);
  if (!isValidZipcode) {
    return alert('Invalid zipcode. Please enter a valid US zipcode.');
  }

  const dateValue = document.getElementById("results-date");
  dateValue.textContent = "Date: " + formObj.date;

  const timezoneValue = document.getElementById("results-timezone");
  // try if/else statements here with formObj.timezone ? 
    // if America/New York -> textContent should be EST ? 
      // make sense ? 
  timezoneValue.textContent = "Timezone: " + formObj.timezone;

  try {
    // fetch location data using provided zip code 
    const { latitude, longitude, city, state } = await getLocationData(formObj.zipcode);

    const location = document.getElementById("results-location");
    location.textContent = `Location: ${city}, ${state} ${formObj.zipcode}`

    // fetch sunrise/sunset time using lat, long, and date 
    const { sunrise, sunset } = await getSunriseSunset(latitude, longitude, formObj.date);

    const sunriseValue = document.getElementById("results-sunrise");
    sunriseValue.textContent = "Sunrise: " + convertToTimezone(sunrise, formObj.timezone);

    const sunsetValue = document.getElementById("results-sunset");
    sunsetValue.textContent = "Sunset: " + convertToTimezone(sunset, formObj.timezone);
  } catch (error) {
    console.warn(error);
  }

  form.reset();
};

// function to validate provided zip code by checking if it returns a city 
const validateZipcode = async (zipcode) => {
  try {
    const { city } = await getLocationData(zipcode);
    return city !== undefined;
    // will verify is city has a value from getLocationData
      // if undefined, not valid zip code 
  } catch (error) {
    console.warn('Error validating zipcode:', error);
    return false;
  }
};

// function to convert time to user inputted time zone 
const convertToTimezone = (time, timeZone) => {
  // time connects with the sunrise/sunset times (lines 44, 47)
  // timeZone connects with option values in the form 
  const date = new Date(time);
  // Int.DateTimeFormat (built in )
    // tells what time zone to adjust the time to when formatting 
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: timeZone
  }).format(date);
};