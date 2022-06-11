import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ErrorComponent from './components/ErrorComponent.jsx';
import LoginComponent from './components/LoginComponent.jsx';
import WelcomeComponent from './components/WelcomeComponent.jsx';
import withParams from './components/withParams.jsx'
import ListTodosComponent from './components/ListTodosComponent.jsx';
import HeaderComponent from './components/HeaderComponent.jsx';
import FooterComponent from './components/FooterComponent.jsx';

import './App.css';

function App() {

  const WelcomeComponentWithParams = withParams(WelcomeComponent);

  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" exact element={<LoginComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/welcome/:name" element={<WelcomeComponentWithParams />} />
          <Route path="/todos" element={<ListTodosComponent />} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
