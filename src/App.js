import { React, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ErrorComponent from './components/ErrorComponent.jsx';
import LoginComponent from './components/LoginComponent.jsx';
import WelcomeComponent from './components/WelcomeComponent.jsx';
import withParams from './components/withParams.jsx'
import ListTodosComponent from './components/ListTodosComponent.jsx';
import ResponsiveAppBar from './components/ResponsiveAppBar.jsx';
import LogoutComponent from './components/LogoutComponent.jsx';
import FooterComponent from './components/FooterComponent.jsx';

import './App.css';
import './Bootstrap.css';

import AuthenticationService from './components/AuthenticationService.js';
import AuthenticationRoute from './components/AuthenticatedRoute.jsx';

function App() {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(AuthenticationService.isUserLoggedIn());

  const WelcomeComponentWithParams = withParams(WelcomeComponent);

  return (
    <div>
      <BrowserRouter>
        <ResponsiveAppBar isUserLoggedIn={isUserLoggedIn} click={setIsUserLoggedIn} />
        <Routes>
          <Route path="/" exact element={<LoginComponent click={setIsUserLoggedIn} />} />
          <Route path="/login" element={<LoginComponent click={setIsUserLoggedIn} />} />
          <Route path="/welcome/:name" element={
            <AuthenticationRoute>
              <WelcomeComponentWithParams />
            </AuthenticationRoute>
          } />
          <Route path="/todos" element={
            <AuthenticationRoute>
              <ListTodosComponent />
            </AuthenticationRoute>
          } />
          <Route path="/logout" element={
            <AuthenticationRoute>
              <LogoutComponent />
            </AuthenticationRoute>
          } />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
