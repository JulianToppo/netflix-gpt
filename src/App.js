import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './components/Session/Login';
import ErrorPage from './components/Error/ErrorPage';

function App() {

  const appRouter=createBrowserRouter([{
    path:'/',
    element:<Login/>,
    errorElement:<ErrorPage/>
  }
  ]) 

  return (
    <div className="App">
       <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
