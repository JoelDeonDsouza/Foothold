module.exports.validateRegisterInput = (
  userName,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (userName.trim() === "") {
    errors.userName = "User Should have a name";
  }
  if (email.trim() === "") {
    errors.email = "User Should provide an email";
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = "Please provide your valid email address";
    }
  }
  if (password === "") {
    errors.password = "Please provide your suitable password";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords musr be the identical ";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (userName, password) => {
  const errors = {};
  if (userName.trim() === "") {
    errors.userName = "User Should have a name";
  }
  if (password.trim() === "") {
    errors.password = "Please provide your valid password";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
