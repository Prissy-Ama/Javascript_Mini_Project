// Object to store details
let userDetailsDatabase = {};

function getUserDetails() {
  // obtaining username from user
  let userName = prompt("Enter your username");

  if (userName == null) {
    return;
  }

  // validating username
  function validateUserName(userName) {
    if (userName.length < 10 && userName.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  // using a while loop to prompt the user in the case the user entered an invalid username as input
  while (validateUserName(userName) == false) {
    userName = prompt(
      "Username must be greater than zero and less than 10 letters."
    );
  }

  userDetailsDatabase["UserName"] = userName;

  // obtaining email from user
  let email = prompt("Enter your email address");

  if (email == null) {
    return;
  }

  // validating email
  function validateEmail(email) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regexEmail)) {
      return true;
    } else {
      return false;
    }
  }
  // using a while loop to prompt the user in the case the user entered an invalid email as input
  while (validateEmail(email) == false) {
    email = prompt("Enter a valid email address");
  }

  userDetailsDatabase["Email"] = email;

  // obtaining phone number from user
  let phoneNumber = prompt("Enter your phone number.");

  if (phoneNumber == null) {
    return;
  }

  // validating phone number
  function validatePhoneNumber(phoneNumber) {
    if (phoneNumber.length == 11) {
      return true;
    } else {
      return false;
    }
  }
  while (validatePhoneNumber(phoneNumber) == false) {
    phoneNumber = prompt("Phone number must be 11 digits, try again!");
  }

  userDetailsDatabase["PhoneNumber"] = phoneNumber;

  // obtaining password from user
  let passWord = prompt("Enter your password");

  if (passWord == null) {
    return;
  }

  // validating the password
  function validatePassWord(passWord) {
    if (passWord.length < 6) {
      return false;
    } else {
      return true;
    }
  }
  while (validatePassWord(passWord) == false) {
    passWord = prompt("Password must not be less than 6 digits.");
  }

  userDetailsDatabase["Password"] = passWord;

  // obtaining the comfirm password
  let confirmPassWord = prompt("Confirm your password");

  if (confirmPassWord == null) {
    return;
  }

  // validating the comfirm password entered by the user. The comfirm password must match the initial entered password
  function validateConfirmPassWord(confirmPassWord) {
    if (confirmPassWord != passWord) {
      return false;
    } else {
      return true;
    }
  }
  while (validateConfirmPassWord(confirmPassWord) == false) {
    confirmPassWord = prompt(
      "Confirm password does not match password, try again!"
    );
  }
}

// Displaying the user details

function displayUserDetails() {
  alert(
    `Your Details\n\nUsername: ${userDetailsDatabase.UserName}\nPhone Number: ${userDetailsDatabase.PhoneNumber} \nEmail: ${userDetailsDatabase.Email}`
  );
}
