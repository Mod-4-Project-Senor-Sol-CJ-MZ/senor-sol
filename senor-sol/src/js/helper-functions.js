import { getLocationData } from "./fetch-functions";

// function to validate provided zip code by checking if it returns a city 
export const validateZipcode = async (zipcode) => {
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
export const convertToTimezone = (time, timeZone) => {
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

// function to randomly generate zipcodes 
export const generateRandomZipcode = () => {
  // min, max given by API
    // min can't be 00210 due to being an octal number 
      // future prob to worry about beginning two 0's (for now will regenerate until valid)
  const min = 210;
  const max = 99950;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};