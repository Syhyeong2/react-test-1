import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import AboutDetail from "./pages/AboutDetail";
import AboutPost from "./pages/AboutPost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/index.html",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/about/:id",
        element: <AboutDetail />,
      },
      {
        path: "/about/post",
        element: <AboutPost />,
      },
    ],
  },
]);
