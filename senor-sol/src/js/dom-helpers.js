// importing functions to use in form submission handling
  // getLocationData & getSunriseSunset
    // will use getSunriseSunsetMoreInfo in eventListener for button after dom/render
import { getLocationData, getSunriseSunset, getSunriseSunsetMoreInfo } from './fetch-functions';
import { convertToTimezone } from './helper-functions';
import { renderMoreInfo } from './render-functions';
import { handleMoreInfo } from './event-listener-functions';

export const resultsContainerDiv = async (formObj) => {

  

  const resultsContainer = document.getElementById("results-container");
  resultsContainer.innerHTML = ``;

  const latestResultContainer = document.createElement("div")
  latestResultContainer.classList.add("latest-result-container")

  const moreInfoButtonContainer = document.createElement("div")
  moreInfoButtonContainer.classList.add("more-info-button")
  
  const moreInfoButton = document.createElement("button")
  moreInfoButton.classList.add("more-info-button")
  moreInfoButton.textContent = "More Info!"

  //adding event listener to more info button
  moreInfoButton.addEventListener("click", handleMoreInfo)

  moreInfoButtonContainer.append(moreInfoButton)

  const moreInfoContainer = document.createElement("div")
  moreInfoContainer.classList.add("more-info-container")

  const moreInfoUl = document.createElement("ul")
  moreInfoUl.classList.add("more-info-ul")
  moreInfoUl.id = `ul:${formObj.zipcode}`

  moreInfoContainer.append(moreInfoUl)
  
  

  const ulContainer = document.createElement("div")
  ulContainer.classList.add("ul-container")

  const ul = document.createElement("ul")
  ul.classList.add("results-list")

  ulContainer.append(ul)
  
  const zipcode = document.createElement("li");
  zipcode.classList.add("results-zipcode")
  zipcode.textContent = `Zipcode: ${formObj.zipcode}`;

  const date = document.createElement("li");
  date.classList.add("results-date")
  date.id = `${formObj.date}`
  date.textContent = `Date: ${formObj.date}`;

  const timezone = document.createElement("li");
  date.classList.add("results-timezone")
  timezone.textContent = `Timezone: ${formObj.timezone}`;

  const location = document.createElement("li");
  location.classList.add("results-location")

  const coords = document.createElement("li");
  coords.classList.add("results-coords")

  const sunrise = document.createElement("li");
  sunrise.classList.add("results-sunrise");

  const sunset = document.createElement("li");
  sunset.classList.add("results-sunset");

  //appending everything together
  resultsContainer.append(latestResultContainer)
  
  
  latestResultContainer.append(ulContainer, moreInfoButtonContainer, moreInfoContainer)



  ul.append(zipcode, date, timezone, location, coords, sunrise, sunset);

  try {
    // fetch location data using provided zip code 
    const { latitude, longitude, city, state } = await getLocationData(formObj.zipcode);

    const preJsonFormObj = {
      zipcode: formObj.zipcode,
      date: formObj.date,
      latitude: latitude,
      longitude: longitude,
      timezone: formObj.timezone
    }

    const jsonFormObj = `${JSON.stringify(preJsonFormObj)}`


    moreInfoButton.id = jsonFormObj

    // console.log(moreInfoButton)

    // console.log(JSON.parse(moreInfoButton.id))



    location.textContent = `Location: ${city}, ${state} ${formObj.zipcode}`;
    coords.textContent = `Latitude, Longitude: ${latitude}, ${longitude}`;
    
    // fetch sunrise/sunset time using lat, long, and date 
    const { sunrise: sunriseTime, sunset: sunsetTime } = await getSunriseSunset(latitude, longitude, formObj.date);
    
    sunrise.textContent = "Sunrise: " + convertToTimezone(sunriseTime, formObj.timezone);
    sunset.textContent = "Sunset: " + convertToTimezone(sunsetTime, formObj.timezone);
  } catch (error) {
    console.warn(error);
  }
};



