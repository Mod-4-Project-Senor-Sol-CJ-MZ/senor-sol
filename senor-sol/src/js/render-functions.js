import { getLocationData, getSunriseSunset, getSunriseSunsetMoreInfo } from './fetch-functions';
const brooklynData = getLocationData()
// console.log(brooklynData)
const renderMainSunInfo = (data) => {
  // making the main card that appears upon loading using the current date and default zipcode
  const mainSunContainer = document.createElement("div")
  mainSunContainer.id = "mainSunContainer"
  const baseInfoUl = document.createElement("ul")
  baseInfoUl.id = "baseInfoUl"
  const placeAndZipLi = document.createElement("li")
  placeAndZipLi.id = "placeAndZipLi"
  const placeAndZipP = document.createElement("p")
  placeAndZipP.textContent = "--placeholder--"
  const latLongLi = document.createElement("li")
  latLongLi.id = "latLongLi"
  const latLongP = document.createElement("p")
  latLongP.textContent = "--placeholder--"
  const dateLi = document.createElement("li")
  dateLi.id = "dateLi"
  const dateP = document.createElement("p")
  dateP.textContent = "--placeholder--"
}

renderMainSunInfo(brooklynData)

