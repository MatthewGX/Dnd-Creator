import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
import SheetManagePage from './pages/User/Sheets/SheetsManagePage/SheetManagePage';
import SheetAddPlayerPage from './pages/User/Sheets/SheetsManagePage/SheetAddPlayerPage/SheetAddPlayerPage';
import SheetAddPage from './pages/User/Sheets/SheetAddPage/SheetAddPage';

import WikiPage from './pages/User/Wiki/WikiPage';
import ResetPasswordPage from './pages/default/login/ResetPasswordPage/ResetPasswordPage';


import GroupsLayout from './pages/User/Groups/GroupsLayout';
import { GroupProvider } from './pages/User/Groups/GroupContext/GroupContext';
import WikiGlossary from './pages/User/Wiki/WikiPage';
import AlignmentsWikiPage from './pages/User/Wiki/wiki-pages/AlignmentsWikiPage';
import BackgroundsWikiPage from './pages/User/Wiki/wiki-pages/BackgroundsWikiPage';
import AttributesWikiPage from './pages/User/Wiki/wiki-pages/AttributesWikiPage';
import RacesWikiPage from './pages/User/Wiki/wiki-pages/RacesWikiPage';
import ClassesWikiPage from './pages/User/Wiki/wiki-pages/ClassesWikiPage';

import SheetsLayout from './pages/User/Sheets/SheetsLayout';
import { SheetProvider } from './pages/User/Sheets/SheetContext/SheetContext';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Pathways (Not Logged In) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="login/reset" element={<ResetPasswordPage />} />

          {/* Guest Pages */}
          <Route path="creator" element={<SheetsMainPage />} />
          <Route path="wiki" element={<WikiPage />} />
        </Route>

        {/* User Pathways (Logged In) */}
        <Route path="/user/" element={<UserLayout />}>
          {/* Profile */}
          <Route index element={<ProfilePage />} />

          {/* Groups */}
          <Route path="groups/" element={<GroupProvider><GroupsLayout /></GroupProvider>}>
            <Route index element={<GroupsMainPage />} />
            <Route path="group/:id/" element={<GroupManagePage />} />
            <Route path="group/:id/add" element={<GroupAddPlayerPage />} />
            <Route path="add" element={<GroupAddPage />} />
          </Route>
          
          {/* Groups */}
          <Route path="sheets/" element={<SheetProvider><SheetsLayout /></SheetProvider>}>
            <Route index element={<SheetsMainPage />} />
            <Route path="group/:id/" element={<SheetManagePage />} />
            <Route path="group/:id/add" element={<SheetAddPlayerPage />} />
            <Route path="add" element={<SheetAddPage />} />
          </Route>


          {/* Wiki */}
          <Route path="wiki/" element={<WikiGlossary />}>
            <Route path="classes" element={<ClassesWikiPage />} />
            <Route path="races" element={<RacesWikiPage />} />
            <Route path="attributes" element={<AttributesWikiPage />} />
            <Route path="backgrounds" element={<BackgroundsWikiPage />} />
            <Route path="alignments" element={<AlignmentsWikiPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
