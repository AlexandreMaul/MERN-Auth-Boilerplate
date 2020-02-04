const messages = {
    emailrequired:          "Email field is required",
    emailinvalid:           "Email is invalid",
    emailexists:            "Email already exists",
    emailnotfound:          "Email not found",

    passwordrequired:       "Password field is required",
    password2required:      "Confirm password field is required",
    passwordlaw:            "Password must be at least 6 characters",
    passwordmatch:          "Passwords must match",
    passwordincorrect:      "Password incorrect",

    namerequired:           "Name field is required",

    usernotfound:           "User not found",
};

module.exports = function getMessage(name) {
    return messages[name];
};