import { getLocationData, getSunriseSunset, getSunriseSunsetMoreInfo } from './fetch-functions';

export const handleSubmit = async (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);

  console.log('Form Data:', formObj);

  const zipcodeValue = document.getElementById("results-zipcode");
  zipcodeValue.textContent = "Zipcode: " + formObj.zipcode;

  const dateValue = document.getElementById("results-date");
  dateValue.textContent = "Date: " + formObj.date;

  const timezoneValue = document.getElementById("results-timezone");
  timezoneValue.textContent = "Timezone: " + formObj.timezone;

  try {
    const { latitude, longitude, city, state } = await getLocationData(formObj.zipcode);
    console.log(`Location: ${city}, ${state} ${formObj.zipcode}`);

    const { sunrise, sunset } = await getSunriseSunset(latitude, longitude, formObj.date);

    const sunriseValue = document.getElementById("results-sunrise");
    sunriseValue.textContent = "Sunrise: " + new Date(sunrise).toLocaleTimeString();

    const sunsetValue = document.getElementById("results-sunset");
    sunsetValue.textContent = "Sunset: " + new Date(sunset).toLocaleTimeString();

  } catch (error) {
    console.warn(error);
  }

  form.reset();
};