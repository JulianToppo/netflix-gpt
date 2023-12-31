import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/Session/Login";
import ErrorPage from "./components/Error/ErrorPage";
import appStore from "./utils/appStore";
import BrowserHomePage from "./components/BrowserHomePage";
import { useEffect } from "react";
import { auth } from "./utils/firebase";
import { Provider, useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/browser",
      element: <BrowserHomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/error",
      element: <ErrorPage />,
    }
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
      } else {
        dispatch(removeUser());
      }
    });
  }, [dispatch]);

  return (

      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
  );
}

export default App;
