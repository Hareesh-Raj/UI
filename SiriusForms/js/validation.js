//import data from the external file.
import { inputMessages } from "./validationData.js";
//storing all the input fields.
const inputs = document.querySelectorAll("input");
//adding eventlistener to the completeButton.
document.getElementById("completeButton").addEventListener("click", (event) => {
  event.preventDefault();
  let isFormValid = true;
  //validating the input fields and setting the warning containers.
  for (let input of inputs) {
    const element = input.id;
    const nextSibling = input.nextElementSibling;
    //checking the input fields.
    if (input.value == "") {
      nextSibling.classList.remove("hide");
      nextSibling.innerText = inputMessages[element].required;
      input.classList.add("error-box");
      isFormValid = false;
    } else if (!inputMessages[element].regex.test(input.value)) {
      nextSibling.classList.remove("hide");
      nextSibling.innerText = inputMessages[element].validation;
      input.classList.add("error-box");
      isFormValid = false;
    } else {
      nextSibling.classList.add("hide");
      input.classList.remove("error-box");
    }
  }
  //if all the fields are valid then the form will be resetted.
  if (isFormValid) {
    document.getElementById("payment-form").reset();
  }
});
