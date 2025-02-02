import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./components/firebase/authWrapper.tsx";
import App from "./App.tsx";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
      <MantineProvider defaultColorScheme="auto">
        <Notifications />
        <App />
      </MantineProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
