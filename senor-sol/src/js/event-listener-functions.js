import { resultsContainerDiv } from './dom-helpers';
import { validateZipcode } from './helper-functions';
import { defaultContainerDiv, renderMoreInfo } from './render-functions'
import { getLocationData, getSunriseSunsetMoreInfo } from './fetch-functions';

// function to handle form submission 
export const handleSubmit = async (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);

  // console.log('Form Data:', formObj);

  const isValidZipcode = await validateZipcode(formObj.zipcode);
  if (!isValidZipcode) {
    return alert('Invalid zipcode. Please enter a valid US zipcode.');
  }

  // Call resultsContainerDiv to update the results section
  await resultsContainerDiv(formObj);
  
  
  
  form.reset();
};

export const handleMoreInfo = async (event) => {
  // console.log(event.target.id)
  const jsonObj = event.target.id
  const latLongDateObj = JSON.parse(jsonObj)
  // console.log(latLongDateObj)

  const {zipcode, date, latitude, longitude, timezone} = latLongDateObj
  // console.log(moreInfoUl)
  // const latAndLong = await getLocationData(zipcode)
  console.log(latLongDateObj)

  const moreInfo = await getSunriseSunsetMoreInfo(latitude, longitude, date)

  renderMoreInfo(moreInfo, zipcode, timezone)
}