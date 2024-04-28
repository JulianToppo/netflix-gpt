const loginValidation = (email, password) => {
  try {
    const emailCheck=/^[^\s@]+@[^\s@]+\.[^\s@]+$/g.test(email);
   const passwordCheck = /^[a-zA-Z0-9]{8,}$/g.test(password);

    console.log(emailCheck,passwordCheck)
    if(emailCheck){
        if(passwordCheck){
          return true;
        }
        else{
          return "Password is invalid";
        }
    }else{
      return "Email is invalid";
    }


  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  loginValidation
};
