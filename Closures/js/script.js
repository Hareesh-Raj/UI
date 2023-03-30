/**
 * This function is used to store the account details
 * The user is asked to enter the account number , pin and card number
 *
 */
function atmFunction() {
  const accountData = [
    {
      accountNumber: 1001,
      cardNumber: "C121",
      pin: 1234,
      accountBalance: 10000,
    },
    {
      accountNumber: 1002,
      cardNumber: "C122",
      pin: 5678,
      accountBalance: 10000,
    },
    {
      accountNumber: 1003,
      cardNumber: "C123",
      pin: 8767,
      accountBalance: 10000,
    },
    {
      accountNumber: 1004,
      cardNumber: "C124",
      pin: 6787,
      accountBalance: 10000,
    },
    {
      accountNumber: 1005,
      cardNumber: "C125",
      pin: 4895,
      accountBalance: 10000,
    },
  ];
  let choice = window.prompt("Enter The Choice");
  let currentUser;
  while (choice) {
    let accountNumber = parseInt(window.prompt("Enter The Account number"));

    currentUser = accountData.filter(
      (data) => accountNumber == data.accountNumber
    );
    if (currentUser.length == 0) {
      window.alert("The account number is invalid");
    } else {
      let cardNumber = window.prompt("Enter the Card Number");
      let accountPIN;
      if (cardNumber == currentUser[0]["cardNumber"]) {
        accountPIN = window.prompt("Enter the PIN");
        if (accountPIN == currentUser[0]["pin"]) {
          let choice = window.prompt(
            "Enter 1 to withdraw and 2 to deposit the money"
          );
          if (choice == 1) {
            withDraw();
          } else if (choice == 2) {
            deposit();
          } else {
            console.log("Invalid Choice");
          }
        } else {
          window.alert("Invalid PIN number");
        }
      } else {
        window.alert("Invalid Card Number");
      }
    }
    choice = window.prompt("Enter The Choice 1 to continue and 0 to exit");
    if (choice == "0") break;
    console.log(choice);
  }
  /**
   * The withdraw function is used to withdraw the amount and update the amount in the current data;
   */
  function withDraw() {
    let requestedAmount = window.prompt("Enter the amount to be withdrawn");
    if (requestedAmount > currentUser[0]["accountBalance"]) {
      window.alert("Invalid Amount");
    } else {
      currentUser[0]["accountBalance"] =
        currentUser[0]["accountBalance"] - requestedAmount;
      window.alert("Take Cash " + requestedAmount);
      window.alert("Available Balance " + currentUser[0]["accountBalance"]);
    }
  }
  /**
   * The deposit function is used to deposit the amount and to update the account balance.
   */
  function deposit() {
    let depositAmount = window.prompt("Enter the amount to be deposited");
    if (depositAmount < 0) {
      window.alert("Invalid Amount");
    } else {
      currentUser[0]["accountBalance"] =
        Number(currentUser[0]["accountBalance"]) + Number(depositAmount);

      window.alert("Balance " + currentUser[0]["accountBalance"]);
    }
  }
}

atmFunction();
