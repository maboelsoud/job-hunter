import {
  AppShell,
  Burger,
  Container,
  Group,
  LoadingOverlay,
  Space,
  Title,
  useMatches,
} from "@mantine/core";
// import './App.css'
import { Login } from "./components/pages/Login";
import { useDisclosure } from "@mantine/hooks";
import { Navigation } from "./components/Navigation";
import { GithubButton } from "./components/icons/githubButton";
import { Link, Outlet, Route, Routes } from "react-router";
import { Dashboard } from "./components/pages/dashboard";
import About from "./components/pages/About";
import Help from "./components/pages/Help";
import { PrivateRoute, PublicRoute, useAuth } from "./components/firebase";
import NotFound from "./components/pages/NotFound";
import {
  BillingSettings,
  ProfileSettings,
  Settings,
  SyncSettings,
} from "./components/pages/Settings";

function AppLayout() {

  const sizes = useMatches({
    base: 'base',
    sm: 'sm',
  });
  const [opened, { toggle }] = useDisclosure(false);
  const {authLoading} = useAuth();
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
            <Title hiddenFrom="sm" order={2}>Job Hunter</Title>
            <Title visibleFrom="sm" order={1}>Job Hunter</Title>
          </Link>
          <GithubButton
            href="https://github.com/maboelsoud/job-hunter"
            target="_blank"
            size="sm"
            ml="auto"
            px="xs"
            isResponsive={sizes === "base"}
            >
            {sizes !== "base" && "GitHub Repo"}
          </GithubButton>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Navigation onClick={toggle} />
      </AppShell.Navbar>

      <AppShell.Main>
        <Container fluid>
          <LoadingOverlay visible={authLoading} /> {/* Show loading overlay */}
          <Space h="md" />
          <Outlet/>
        </Container>
      </AppShell.Main>

    </AppShell>
  )
}

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
