import {
  AppShell,
  Burger,
  Container,
  Group,
  LoadingOverlay,
  Space,
  Title,
} from "@mantine/core";
// import './App.css'
import { Login } from "./components/firebase/Login";
import { useDisclosure } from "@mantine/hooks";
import { Navigation } from "./components/Navigation";
import { GithubButton } from "./components/icons/githubButton";
import { Link, Route, Routes } from "react-router";
import { Dashboard } from "./components/pages/dashboard";
import { Navigate } from "react-router";
import About from "./components/pages/About";
import Help from "./components/pages/Help";
import { PrivateRoute, PublicRoute } from "./components/firebase/authWrapper";
import NotFound from "./components/pages/NotFound";
import {
  BillingSettings,
  ProfileSettings,
  Settings,
  SyncSettings,
} from "./components/pages/Settings";

const demoProps = {
  // bg: 'var(--mantine-color-blue-light)',
  // h: 500,
  // mt: 'lg',
  // p: 20,
  // style: { maxWidth: '100%', width: '80%' , minHeight: '100vh'}, // Make container wider
};

function App() {
  const [opened, { toggle }] = useDisclosure(false);
  const loading = false;
  const [auth, { toggle: toggleAuth }] = useDisclosure(!false);
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Title order={1}>Job Hunter</Title>
          </Link>
          <GithubButton
            href="https://github.com/maboelsoud/job-hunter"
            target="_blank"
            size="sm"
            ml="auto"
          >
            GitHub Repo
          </GithubButton>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Navigation auth={auth} onClick={toggle} />
      </AppShell.Navbar>

      <AppShell.Main>
        <Container fluid {...demoProps}>
          <LoadingOverlay visible={loading} /> {/* Show loading overlay */}
          <Space h="md" />
          <Routes>
            <Route
              path="/"
              element={<Navigate to={auth ? "/dashboard" : "/login"} />}
            />
            <Route element={<PrivateRoute auth={auth} />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="settings" element={<Settings />}>
                <Route path="profile" element={<ProfileSettings />} />
                <Route path="sync" element={<SyncSettings />} />
                <Route path="billing" element={<BillingSettings />} />
              </Route>
            </Route>
            <Route element={<PublicRoute auth={auth} />}>
              <Route path="login" element={<Login />} />
            </Route>
            <Route path="help" element={<Help />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
