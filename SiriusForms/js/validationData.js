export const inputMessages = {
  firstName: {
    required: "First Name is required",
    validation: "First Name is not valid",
    regex: /^[a-zA-Z]{1,30}$/,
  },
  lastName: {
    required: "Last Name is required",
    validation: "Last Name is not valid",
    regex: /^[a-zA-Z]{1,30}$/,
  },
  email: {
    required: "Email is required",
    validation: "Email is not valid",
    regex: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
  },
  contactNumber: {
    required: "Contact Number is required",
    validation: "Contact Number is not valid",
    regex: /^[6-9]\d{9}$/,
  },
  pinCode: {
    required: "PIN Code is required",
    validation: "PIN Code is not valid",
    regex: /^[1-9][0-9]{5}$/,
  },
  cardNumber: {
    required: "Card Number is required",
    validation: "Card Number is not valid",
    regex: /^4[0-9]{15}$/,
  },
  cardExpiryYear: {
    required: "Card Expiry is required",
    validation: "Card Expiry is not valid",
    regex: /^2[0-9][2-9][3-9]$/,
  },
  cvv: {
    required: "CVV is required",
    validation: "CVV is not valid",
    regex: /^[0-9]{3,4}$/,
  },
};
