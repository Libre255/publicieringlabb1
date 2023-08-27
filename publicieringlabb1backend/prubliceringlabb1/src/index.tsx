import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Weather from './Weather';
import NavigationBar from './NavigationBar';
import WorldTimes from './WorldTimes';
import { Iworldtimes } from './Service/worldtimeService';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"weather",
    element:<Weather/>
  },
  {
    path:"time",
    element:<WorldTimes/>
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <>
      <NavigationBar/>
      <RouterProvider router={router}/>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
