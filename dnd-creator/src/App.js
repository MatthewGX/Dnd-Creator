import { NavBar } from './components/navbar/navbar';
import { BrowserRouter as Router, Route, Switch, Link, Outlet, BrowserRouter, Routes } from 'react-router-dom';
import logo from "./Icon.png";

// StyleSheets
import './App.css';
import { LoginPage } from './pages/default/login/login-page';
import LandingPage from './pages/default/landing-page/landing-page';
import Layout from './pages/default/Layout';
import UserLayout from './pages/User/UserLayout';
import ProfilePage from './pages/User/ProfilePage/ProfilePage';
import GroupsMainPage from './pages/User/Groups/GroupsMainPage/GroupsMainPage';
import GroupManagePage from './pages/User/Groups/GroupManagePage/GroupManagePage';
import GroupAddPlayerPage from './pages/User/Groups/GroupManagePage/GroupAddPlayerPage/GroupAddPlayerPage';
import GroupAddPage from './pages/User/Groups/GroupAddPage/GroupAddPage';
import SheetsMainPage from './pages/User/Sheets/SheetsMainPage/SheetsMainPage';
import SheetCreatorPage from './pages/User/Sheets/CreatorPage/SheetCreatorPage';
import WikiPage from './pages/User/Wiki/WikiPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Default Pathways (Not Logged In) */}
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="login" element={<LoginPage />} />

            {/* Guest Pages */}
            <Route path="creator" element={<SheetCreatorPage />} />
            <Route path="wiki" element={<WikiPage />} />
          </Route>
          
          {/* User Pathways (Logged In) */}
          <Route path="/user/" element={<UserLayout />}>
            {/* Profile */}
            <Route index element={<ProfilePage />} />
            
            {/* Groups */}
            <Route path="groups/" element={<GroupsMainPage />}>
              <Route path='group/:id/' element={<GroupManagePage />}>
                <Route path='add' element={<GroupAddPlayerPage />} />
              </Route>
              <Route path='add' element={<GroupAddPage />} />
            </Route>

            {/* Sheets */}
            <Route path="sheets/" element={<SheetsMainPage />}>
              <Route path="creator" element={<SheetCreatorPage />} />
            </Route>

            {/* Wiki */}
            <Route path="wiki/" element={<WikiPage />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
