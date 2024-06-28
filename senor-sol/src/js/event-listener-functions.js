import { resultsContainerDiv } from './dom-helpers';
import { validateZipcode, generateRandomZipcode } from './helper-functions';

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

// function to handle lucky click button 
export const handleLuckyClick = async () => {
  let isValid = false;
  let randomZipcode;

  // if not valid, keep generating until it is
  while (!isValid) {
    randomZipcode = generateRandomZipcode();
    isValid = await validateZipcode(randomZipcode);
  }

  const formObj = {
    zipcode: randomZipcode,
    // Current date in YYYY-MM-DD format
    date: new Date().toISOString().split('T')[0], 
    // User's local timezone
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone 
  };

  await resultsContainerDiv(formObj);
};

