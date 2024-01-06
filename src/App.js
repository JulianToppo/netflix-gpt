import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/Session/Login";
import ErrorPage from "./components/Error/ErrorPage";

import BrowseHomePage from "./components/BrowseHomePage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/browse",
      element: <BrowseHomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/error",
      element: <ErrorPage />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
