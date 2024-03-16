import React, { useState, useRef } from "react";
import { loginValidation } from "../../utils/loginValidation";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../../utils/firebase'
import { useNavigate } from "react-router-dom";


const SessionForm = () => {

  
  const [registered, setRegistered] = useState(false);
  const [loginErrorMessage, setloginErrorMessage] = useState("");
  const [loginErrorDisplay, setLoginErrorDisplay] = useState(""); 
  const email = useRef(null);
  const password = useRef(null);
  const username= useRef(null)

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const checkLoginValidations = loginValidation(
      email.current.value,
      password.current.value
    );

    if (checkLoginValidations === true) {
      //login successful
      if (registered) {
        //signin
        signInWithEmailAndPassword(  auth,
          email.current.value,
          password.current.value)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
              console.log(user);
            
              
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setloginErrorMessage(errorCode+" "+errorMessage)
          });
      } else {
        //sign up
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(user, {
              displayName: username.current.value, photoURL: "https://media.istockphoto.com/id/1414352099/photo/close-up-image-of-indian-man-filling-wooden-trough-on-residential-balcony-with-soil-and.jpg?s=1024x1024&w=is&k=20&c=hmegtd1CMTz5x5akKZ88YSNjZjbquHfsCD7z4YH2M54="
            }).then(() => {
              console.log(user);
            })
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setloginErrorMessage(errorCode+" "+errorMessage);
          });
      }
    } else {
      setloginErrorMessage(checkLoginValidations);
      displayLoginErrorMessage();
      
      

    }
  };

  const displayLoginErrorMessage = () => {
    setLoginErrorDisplay(loginErrorMessage);
    setTimeout(() => {
      setLoginErrorDisplay('');
    }, 3000);
  };

  return (
    <div className="p-16 w-10/12 md:w-1/3 mx-auto  bg-black bg-opacity-80 rounded-lg">
      <div>
        <p className="text-3xl py-3 font-semiboldbold text-white">
          {registered ? "Sign In" : "Sign up"}
        </p>
        <form>
          {registered ? (
            <span></span>
          ) : (
            <input
            ref={username}
              className="rounded-md my-4 w-full p-3"
              type="text"
              placeholder="Username"
            ></input>
          )}
          <input
            ref={email}
            className="rounded-md my-4 w-full p-3"
            type="text"
            placeholder="Email"
          ></input>
          <br />
          <input
            ref={password}
            className="rounded-md my-4 w-full p-3"
            type="password"
            placeholder="Password"
          ></input>
          <br />
          <p className="text-red-600">{loginErrorDisplay}</p>
          <button
            onClick={onSubmitHandler}
            className="w-full z-50 my-4 text-white bg-red-500 p-3 opacity-80 rounded-md"
            type="submit"
          >
            {registered ? "Sign In" : "Sign up"}
          </button>
        </form>
      </div>

      <p
        className="cursor-pointer  text-white"
        onClick={() => {
          setRegistered(!registered);
        }}
      >
        {!registered ? "Already registered? Sign In" : "New User? Sign Up"}
      </p>
    </div>
  );
};

export default SessionForm;
