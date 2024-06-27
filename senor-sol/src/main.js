import './style.css'
import { handleSubmit } from './js/event-listener-functions';
import { defaultContainerDiv } from './js/render-functions'
import { userDefaultLatnLong, getDefaultSunriseSunset } from './js/fetch-functions'


const main = async () => {
  const latLongObj = await userDefaultLatnLong();
  console.log(latLongObj)
  const res = await getDefaultSunriseSunset(latLongObj)
  console.log(res)
  await defaultContainerDiv(latLongObj, res)

  
  const form = document.querySelector("#sunForm");
  form.addEventListener("submit", handleSubmit);
};

main();
