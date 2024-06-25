import './style.css'
import { handleSubmit } from './js/event-listener-functions';


const main = () => {
  const form = document.querySelector("#sunForm");
  form.addEventListener("submit", handleSubmit);
};

main();
