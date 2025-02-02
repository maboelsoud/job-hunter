import { Badge, NavLink } from "@mantine/core";
// import { signOut } from "firebase/auth";
import { NavLink as routerNavLink, useNavigate } from "react-router";
import { logOut, useAuth } from "./firebase";

export function Navigation({onClick}: {
  onClick: () => void;
}) {
    const navigate = useNavigate();
    const {signedIn} = useAuth();
  return (
    <>
      {signedIn && (
        <>
          <NavLink
            onClick={onClick}
            component={routerNavLink}
            to="/"
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
      {!signedIn && (
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
      {signedIn && (
        <NavLink
          onClick={async ()=> {
            onClick();
            await logOut();
            navigate("/", { replace: true });
          }}
          label="Logout"
        />
      )}
    </>
  );
}
