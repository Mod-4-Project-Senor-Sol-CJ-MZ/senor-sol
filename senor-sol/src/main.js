import './style.css'

import { defaultContainerDiv, renderMoreInfo } from './js/render-functions'
import { userDefaultLatnLong, getDefaultSunriseSunset, getSunriseSunsetMoreInfo } from './js/fetch-functions'

import { handleSubmit, handleLuckyClick } from './js/event-listener-functions';



const main = async () => {
  const latLongObj = await userDefaultLatnLong();
  // console.log(latLongObj)
  const res = await getDefaultSunriseSunset(latLongObj)
  // console.log(res)
  await defaultContainerDiv(latLongObj, res)

  
  const form = document.querySelector("#sun-form");
  form.addEventListener("submit", handleSubmit);



  const luckyButton = document.getElementById("lucky-button");
  luckyButton.addEventListener("click", handleLuckyClick);

};

main();