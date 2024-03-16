import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Session/Login";
import ErrorPage from "./components/Error/ErrorPage";
import BrowseHomePage from "./components/BrowseHomePage";
import MovieDetails from "./components/MovieDetails/MovieDetails";

function App() {
  return (
    <div className="flex h-screen w-full  items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse">
            <Route path="" element={<BrowseHomePage />}></Route>
          </Route>
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
