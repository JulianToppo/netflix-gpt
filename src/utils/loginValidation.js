const loginValidation = (email, password) => {
  try {
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g.test(email);

    console.log("Email:", emailCheck);

    if (emailCheck) {
      return true;
    } else {
      return "Email is invalid";
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

module.exports = {
  loginValidation
};
