import { Badge, NavLink } from "@mantine/core";
import { NavLink as routerNavLink } from "react-router";

export function Navigation({
  auth,
  onClick,
}: {
  auth: boolean;
  onClick: () => void;
}) {
  return (
    <>
      {auth && (
        <>
          <NavLink
            onClick={onClick}
            component={routerNavLink}
            to="/dashboard"
            label="Dashboard"
            rightSection={
              <Badge size="xs" color="green">
                3 new jobs
              </Badge>
            }
            style={{ borderRadius: 10 }}
          />

          <NavLink
            onClick={onClick}
            component={routerNavLink}
            to="/settings"
            label="Settings"
          />
        </>
      )}
      {!auth && (
        <NavLink
          onClick={onClick}
          component={routerNavLink}
          to="/login"
          label="Login"
        />
      )}
      <NavLink
        onClick={onClick}
        component={routerNavLink}
        to="/help"
        label="Help"
      />
      <NavLink
        onClick={onClick}
        component={routerNavLink}
        to="/about"
        label="About"
      />
      {auth && (
        <NavLink
          onClick={onClick}
          component={routerNavLink}
          to="/handleSignOut"
          label="Logout"
        />
      )}
    </>
  );
}
