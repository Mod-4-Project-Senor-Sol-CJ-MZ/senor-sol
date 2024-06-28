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
  // date.textContent = `Date: ${new Date().toISOString().split('T')[0]}`;

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

export const renderMoreInfo = (moreInfoObj, zipcode, timezone) => {
  const moreInfoUl = document.getElementById(`ul:${zipcode}`)
  // console.log(moreInfoUl)

  moreInfoUl.innerHTML = ""

  const {solarNoon, dayLength, civilTwilightBegin, civilTwilightEnd, nauticalTwilightBegin, nauticalTwilightEnd, astTwilightBegin, astTwilightEnd} = moreInfoObj

  const solarNoonLi = document.createElement("li")
  solarNoonLi.textContent = `Solar Noon: ${convertToTimezone(solarNoon, timezone)}`

  const convertSeconds = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
  
    if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} : ${minutes} minute${minutes > 1 ? 's' : ''}`
    } else {
      return `${minutes} minute${minutes > 1 ? 's' : ''}`
    }
  }


  const dayLengthLi = document.createElement("li")
  dayLengthLi.textContent = ` Day Length: ${convertSeconds(dayLength)}`

  const civilTwilightBeginLi = document.createElement("li")
  civilTwilightBeginLi.textContent = `Civil Twilight Begin: ${convertToTimezone(civilTwilightBegin, timezone)}`

  const civilTwilightEndLi = document.createElement("li")
  civilTwilightEndLi.textContent = `Civil Twilight End: ${convertToTimezone(civilTwilightEnd, timezone)}`

  const nauticalTwilightBeginLi = document.createElement("li")
  nauticalTwilightBeginLi.textContent = `Nautical Twilight Begin: ${convertToTimezone(nauticalTwilightBegin, timezone)}`
  
  const nauticalTwilightEndLi = document.createElement("li")
  nauticalTwilightEndLi.textContent = `Nautical Twilight End: ${convertToTimezone(nauticalTwilightEnd, timezone)}`
  
  const astTwilightBeginLi = document.createElement("li")
  astTwilightBeginLi.textContent = `Astronomical Twilight Begin: ${convertToTimezone(astTwilightBegin, timezone)}`
  
  const astTwilightEndLi = document.createElement("li")
  astTwilightEndLi.textContent = `Astronomical Twilight End: ${convertToTimezone(astTwilightEnd, timezone)}`

  moreInfoUl.append(solarNoonLi, dayLengthLi, civilTwilightBeginLi, civilTwilightEndLi, nauticalTwilightBeginLi, nauticalTwilightEndLi, astTwilightBeginLi, astTwilightEndLi)
}

};

