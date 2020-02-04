const Validator = require("validator");
const isEmpty = require("is-empty");
const getMessage = require("../config/messages");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = getMessage("namerequired");
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = getMessage("emailrequired");
  } else if (!Validator.isEmail(data.email)) {
    errors.email = getMessage("emailinvalid");
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = getMessage("passwordrequired");
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = getMessage("password2required");
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = getMessage("passwordlaw");
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = getMessage("passwordmatch");
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
