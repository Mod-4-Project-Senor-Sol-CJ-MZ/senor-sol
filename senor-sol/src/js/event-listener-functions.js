import { resultsContainerDiv } from './dom-helpers';
import { validateZipcode } from './helper-functions';

// function to handle form submission 
export const handleSubmit = async (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);

  console.log('Form Data:', formObj);

  const isValidZipcode = await validateZipcode(formObj.zipcode);
  if (!isValidZipcode) {
    return alert('Invalid zipcode. Please enter a valid US zipcode.');
  }

  // Call resultsContainerDiv to update the results section
  await resultsContainerDiv(formObj);

  form.reset();
};