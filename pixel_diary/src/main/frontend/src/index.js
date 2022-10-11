import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';

import setAuthorizationToken from './pixel/utils/setAuthorizationToken';
import App from './App';
import Login from './pixel/LoginPage';
import Join from './pixel/RegisterPage'
import {MainPage} from './pixel/MainPage'
import RequireAuth from './pixel/utils/RequireAuth';

import reportWebVitals from './reportWebVitals';

setAuthorizationToken(localStorage.jwtToken);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="login" element={<Login />} /> 
      <Route path="join" element={<Join />} />
      {/* <Route path="main" element={<MainPage />} /> */}
      <Route path="main" element={
          <RequireAuth>
            <MainPage/>
          </RequireAuth>
        } 
      />
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();