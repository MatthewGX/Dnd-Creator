import { NavBar } from './components/navbar/navbar';
import { BrowserRouter as Router, Route, Switch, Link, Outlet, BrowserRouter, Routes } from 'react-router-dom';
import logo from "./Icon.png";

// StyleSheets
import './App.css';
import { LoginPage } from './pages/login/login-page';
import LandingPage from './pages/landing-page/landing-page';
import Layout from './Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
