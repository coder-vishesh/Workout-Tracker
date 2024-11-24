import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LoginHandle from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Profile from "./components/Profile.jsx";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

const route = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <LoginHandle />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
