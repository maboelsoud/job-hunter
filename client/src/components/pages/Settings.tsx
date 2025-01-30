import { Container, Group, NavLink, Stack, Title } from "@mantine/core";
import { Outlet, NavLink as routerNavLink } from "react-router";

export function ProfileSettings() {
  return <div>Profile settings</div>;
}

export function SyncSettings() {
  return <div>Sync settings</div>;
}

export function BillingSettings() {
  return <div>Billing settings</div>;
}

export function Settings() {
  return (
    <Stack>
      <Title order={1}>Settings</Title>
      <Group>
        <Container p={0}>
          <NavLink component={routerNavLink} to="profile" label="Profile" />
          <NavLink component={routerNavLink} to="sync" label="Sync" />
          <NavLink component={routerNavLink} to="billing" label="Billing" />
        </Container>
        <Container fluid style={{ maxWidth: "100%", width: "80%" }}>
          <Outlet />
        </Container>
      </Group>
    </Stack>
  );
}
