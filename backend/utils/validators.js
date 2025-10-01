function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); //Email Format String
}

function isValidNumber(number) {
  return /^\+63\s?\d{3}\s?\d{3}\s?\d{4}$/.test(number); // PH Phone Number Format String
}

function isValidNumber2(number) {
  return /^09\d{9}$/.test(number); // PH Phone Number Format String
}

module.exports = {
  isValidEmail,
  isValidNumber,
  isValidNumber2,
};
