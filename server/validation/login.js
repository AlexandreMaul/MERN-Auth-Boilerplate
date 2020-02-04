const Validator = require("validator");
const isEmpty = require("is-empty");
const getMessage = require("../config/messages");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.email)) {
    errors.email = getMessage("emailrequired");
  } else if (!Validator.isEmail(data.email)) {
    errors.email = getMessage("emailinvalid");
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = getMessage("passwordrequired");
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
