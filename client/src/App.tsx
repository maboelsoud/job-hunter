// import './App.css'
import { Login } from "./components/pages/Login";
import { Route, Routes } from "react-router";
import { Dashboard } from "./components/pages/dashboard";
import About from "./components/pages/About";
import Help from "./components/pages/Help";
import { PrivateRoute, PublicRoute } from "./components/firebase";
import NotFound from "./components/pages/NotFound";
import {
  BillingSettings,
  ProfileSettings,
  Settings,
  SyncSettings,
} from "./components/pages/Settings";
import { AppLayout } from "./components/pages/AppLayout";


function App() {

  return (

          <Routes>
            <Route path="/" element={<AppLayout />} >
            <Route element={<PrivateRoute defaultPath="/login" />}>
              <Route index element={<Dashboard />} />
              <Route path="settings" element={<Settings />}>
                <Route path="profile" element={<ProfileSettings />} />
                <Route path="sync" element={<SyncSettings />} />
                <Route path="billing" element={<BillingSettings />} />
              </Route>
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="login" element={<Login />} />
            </Route>
            <Route path="help" element={<Help />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
  );
}

export default App;
