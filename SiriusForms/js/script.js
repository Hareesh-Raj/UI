document.getElementById("completeButton").addEventListener("click", (event) => {
  event.preventDefault();

  //flag variable to check.
  let flag=true;

  //input boxes
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");
  let contactNumber = document.getElementById("contactNumber");
  let pinCode = document.getElementById("pinCode");
  let cardNumber = document.getElementById("cardNumber");
  let cardExpiryYear = document.getElementById("cardExpiryYear");
  let cvv = document.getElementById("cvv");

  //Invalid Error content  Boxes
  let firstNameError = document.getElementById("invalid-first-name");
  let lastNameError = document.getElementById("invalid-last-name");
  let emailError = document.getElementById("invalid-email");
  let contactNumberError = document.getElementById("invalid-contact-number");
  let pinCodeError = document.getElementById("invalid-pin");
  let cardNumberError = document.getElementById("invalid-card-number");
  let cardExpiryYearError = document.getElementById("invalid-card-year");
  let cvvError = document.getElementById("invalid-cvv");
  //validating first name
  if (firstName.value == "") {
    firstNameError.classList.remove("hide");
    firstNameError.innerHTML = "First Name is required";
    firstName.classList.add("error-box");
    flag = false;
  }
  // should be alphabet and length should be 1 to 30.
  else if (!/^[a-zA-Z]{1,30}$/.test(firstName.value)) {
    firstNameError.classList.remove("hide");
    firstNameError.innerHTML = "First Name is not valid";
    firstName.classList.add("error-box");
    flag = false;
  } else {
    firstNameError.classList.add("hide");
    firstNameError.innerHTML = "";
    firstName.classList.remove("error-box");
  }
  //validating last name
  if (lastName.value == "") {
    lastNameError.classList.remove("hide");
    lastNameError.innerHTML = "Last Name is required";
    lastName.classList.add("error-box");
    flag = false;
  }
  // should be alphabet and length should be 1 to 30.
  else if (!/^[a-zA-Z]{1,30}$/.test(lastName.value)) {
    lastNameError.classList.remove("hide");
    lastNameError.innerHTML = "Last Name is not valid";
    lastName.classList.add("error-box");
    flag = false;
  } else {
    lastNameError.classList.add("hide");
    lastNameError.innerHTML = "";
    lastName.classList.remove("error-box");
  }
  //validating email
  if (email.value == "") {
    emailError.classList.remove("hide");
    emailError.innerHTML = "Email Address is required";
    email.classList.add("error-box");
    flag = false;
  } else if ((!/^\S+@\S+\.\S+$/.test(email.value)) || (email.value.length > 50)) {
    emailError.classList.remove("hide");
    emailError.innerHTML = "Email Address is not valid";
    email.classList.add("error-box");
    flag = false;
  } else {
    console.log(email.value.length);
    emailError.classList.add("hide");
    emailError.innerHTML = "";
    email.classList.remove("error-box");
  }
  //validating contact number
  if (contactNumber.value == "") {
    contactNumberError.classList.remove("hide");
    contactNumberError.innerHTML = "Contact Number is required";
    contactNumber.classList.add("error-box");
    flag = false;
  } else if (!/^[6-9]\d{9}$/.test(contactNumber.value)) {
    contactNumberError.classList.remove("hide");
    contactNumberError.innerHTML = "Contact Number is not valid";
    contactNumber.classList.add("error-box");
    flag = false;
  } else {
    contactNumberError.classList.add("hide");
    contactNumberError.innerHTML = "";
    contactNumber.classList.remove("error-box");
  }
  //validating pin code
  if (pinCode.value == "") {
    pinCodeError.classList.remove("hide");
    pinCodeError.innerHTML = "PIN Code is required";
    pinCode.classList.add("error-box");
    flag = false;
  } else if (!/^[1-9][0-9]{5}$/.test(pinCode.value)) {
    pinCodeError.classList.remove("hide");
    pinCodeError.innerHTML = "PIN Code is not valid";
    pinCode.classList.add("error-box");
    flag = false;
  } else {
    pinCodeError.classList.add("hide");
    pinCodeError.innerHTML = "";
    pinCode.classList.remove("error-box");
  }
  //validating card number
  if (cardNumber.value == "") {
    cardNumberError.classList.remove("hide");
    cardNumberError.innerHTML = "Card Number is required";
    cardNumber.classList.add("error-box");
    flag = false;
  } else if (!/^4[0-9]{15}$/.test(cardNumber.value)) {
    cardNumberError.classList.remove("hide");
    cardNumberError.innerHTML = "Card Number is not valid";
    cardNumber.classList.add("error-box");
    flag = false;
  } else {
    cardNumberError.classList.add("hide");
    cardNumberError.innerHTML = "";
    cardNumber.classList.remove("error-box");
  }
  //validating card expiry year
  if (cardExpiryYear.value == "") {
    cardExpiryYearError.classList.remove("hide");
    cardExpiryYearError.innerHTML = "Card Expiry is required";
    cardExpiryYear.classList.add("error-box");
    flag = false;
  } else if (/([0-9]+){4}$/.test(cardExpiryYear.value)) {
    let date = new Date();
    let year = date.getFullYear();
    if (Number(cardExpiryYear.value) < year) {
      cardExpiryYearError.classList.remove("hide");
      cardExpiryYearError.innerHTML = "Card Expiry is not valid";
      cardExpiryYear.classList.add("error-box");
      flag = false;
    } else {
      cardExpiryYearError.classList.add("hide");
      cardExpiryYearError.innerHTML = "";
      cardExpiryYear.classList.remove("error-box");
    }
  } else {
    cardExpiryYearError.classList.remove("hide");
    cardExpiryYearError.innerHTML = "Card Expiry is not valid";
    cardExpiryYear.classList.add("error-box");
    flag = false;
  }

  //validating cvv
  if (cvv.value == "") {
    cvvError.classList.remove("hide");
    cvvError.innerHTML = "CVV is required";
    cvv.classList.add("error-box");
    flag = false;
  } else if (!/^[0-9]{3,4}$/.test(cvv.value)) {
    cvvError.classList.remove("hide");
    cvvError.innerHTML = "CVV is not valid";
    cvv.classList.add("error-box");
    flag = false;
  } else {
    cvvError.classList.add("hide");
    cvvError.innerHTML = "";
    cvv.classList.remove("error-box");
  }
  //if all conditions are passed the form will get resetted.
  if(flag)
  document.getElementById("payment-form").reset();
});
