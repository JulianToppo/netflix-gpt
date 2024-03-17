import React, { useEffect } from "react";
import { auth } from "../../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import { toggleShowGptPage } from "../../utils/gptSlice";
import { toggleShow } from "../../utils/movieDetailsSlice";

const Header = () => {
  const currentUser = auth.currentUser;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const user = useSelector((store) =>store.userSlice);
  const gpt = useSelector((store) => store.gptSlice);
  const movieDetails = useSelector((store) => store.movieDetailsSlice);
  console.log("currentuser", currentUser);

  const SignoutOnclickHandler = (e) => {
    e.preventDefault();

    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [dispatch, navigate]);

  const onClickGptButtonHandler = (e) => {
    try {
      e.preventDefault();
      dispatch(toggleShowGptPage());
    } catch (error) {
      console.log(error);
    }
  };

  const onclickNetflixLogo = (e) => {
    try {
      e.preventDefault();
      if (movieDetails.show == true) {
        dispatch(toggleShow());
      }
      if (gpt.showGptPage == true) {
        dispatch(toggleShowGptPage());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex relative justify-around bg-gradient-to-b from-black text-white w-full z-50 h-1/12 px-10">
      <div>
        <img
          onClick={onclickNetflixLogo}
          alt="logo"
          className="z-10 w-full md:w-1/6 mt-3 cursor-pointer"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        ></img>
      </div>

      <div className="flex h-full ">
        {currentUser && (
          <div className="p-8 flex justify-around space-x-3">
            {/* <h5>{user.displayName}</h5> */}
            <button
              className="bg-green-500 rounded-md px-9"
              onClick={onClickGptButtonHandler}
            >
              {gpt.showGptPage ? "HomePage" : "NetflixGpt"}
            </button>
            <img
              className="rounded-xl size-10"
              alt="current-user"
              src={currentUser.photoURL}
            ></img>{" "}
            <button
              className="cursor-pointer  rounded-lg px-4 bg-red-600"
              onClick={SignoutOnclickHandler}
            >
              SignOut
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
