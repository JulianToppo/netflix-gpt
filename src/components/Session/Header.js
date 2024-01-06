import React, { useEffect } from "react";
import { auth } from "../../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";

const Header = () => {
  const currentUser = auth.currentUser;
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const user = useSelector((store) =>store.userSlice);

  console.log("currentuser", currentUser);

 

  const SignoutOnclickHandler = (e) => {
    e.preventDefault();

    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });

    //unsubscribe when the component unmounts
    return ()=>{
      unsubscribe();
    }
  }, [dispatch,navigate]);

  return (
    <div className="flex justify-between absolute z-50 h-24">
      <div>
        <img
          alt="logo"
          className="z-10 w-full md:w-1/6 m-3"

          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        ></img>
      </div>

      <div className="flex">
        {currentUser && (
          <div className="p-8 flex justify-stretch">
            <h5>{user.displayName}</h5>
            <img className="rounded-xl" alt="current-user" src={currentUser.photoURL}></img>{" "}
            <p className="cursor-pointer" onClick={SignoutOnclickHandler}>SignOut</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
