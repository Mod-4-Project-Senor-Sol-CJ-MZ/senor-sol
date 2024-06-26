import { getLocationData, getSunriseSunset, getSunriseSunsetMoreInfo } from './fetch-functions';

export const handleSubmit = async (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);

  // console.log('Form Data:', formObj);

  const zipcodeValue = document.getElementById("results-zipcode");
  zipcodeValue.textContent = "Zipcode: " + formObj.zipcode;

  const dateValue = document.getElementById("results-date");
  dateValue.textContent = "Date: " + formObj.date;

  const timezoneValue = document.getElementById("results-timezone");
  // try if/else statements here with formObj.timezone ? 
    // if America/New York -> textContent should be EST ? 
      // make sense ? 
  timezoneValue.textContent = "Timezone: " + formObj.timezone;

  try {
    const { latitude, longitude, city, state } = await getLocationData(formObj.zipcode);

    const location = document.getElementById("results-location");
    location.textContent = `Location: ${city}, ${state} ${formObj.zipcode}`

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

const convertToTimezone = (time, timeZone) => {
  // timeZone connects with option values in the form 
  const date = new Date(time);
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: timeZone
  }).format(date);
};