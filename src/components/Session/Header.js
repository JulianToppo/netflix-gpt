import React from "react";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const currentUser = auth.currentUser;
  const navigate = useNavigate();

  const user = useSelector((store) =>store.userSlice);

  console.log("currentuser", currentUser);

  const SignoutOnclickHandler = (e) => {
    e.preventDefault();

    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="flex justify-between h-1/6 bg-slate-500">
      <div>
        <img
          alt="logo"
          className="z-10 absolute w-full md:w-1/6 m-3"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        ></img>
      </div>

      <div className=" flex w-2/12 h-2/6">
        {currentUser && (
          <div className="p-8">
            <h5>{user.displayName}</h5>
            <img src={currentUser.photoURL}></img>{" "}
            <p onClick={SignoutOnclickHandler}>SignOut</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
