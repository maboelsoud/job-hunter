import { AppShell, useMatches, Group, Burger, Title, Avatar, Container, LoadingOverlay, Space } from "@mantine/core";
import { useDisclosure} from "@mantine/hooks";
import { Link, Outlet } from "react-router";
import { useAuth } from "../firebase";
import { GithubButton } from "../icons/githubButton";
import { Navigation } from "../Navigation";


export function AppLayout() {

  const sizes = useMatches({
    base: 'base',
    sm: 'sm',
  });
  const [opened, { toggle }] = useDisclosure(false);
  const {authLoading, currentUser} = useAuth();
  
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
          {currentUser && (
          <Avatar 
            name={currentUser?.displayName || "Anonymous"}
            src={currentUser?.photoURL}
            alt="it's me" ></Avatar>
          )}
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