function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); //Email Format String
}

function isValidNumber(number) {
  return /^\+63\d{9}$/.test(number); // PH Phone Number Format String
}

module.exports = {
  isValidEmail,
  isValidNumber,
};
