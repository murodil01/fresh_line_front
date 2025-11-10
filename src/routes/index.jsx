import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/index";

import Home from "../pages/home";
import Login from "../pages/login";

import Statistika from "../pages/statictic";
import Mahsulotlar from "../pages/mahuslotlar";
import Export from "../pages/export";
import Logistic from "../pages/logistic";
import Marcet from "../pages/marcet";
import Halp from "../pages/halp";
import Settings from "../pages/settings";
import Import from "../pages/import";

import PrivateRoute from "../components/private-route";
import GuestRoute from "../components/GuestRoute";
import HomeComponent from "../components/home";
import PrivateError from "../pages/private-error";
import VideoPage from "../pages/video-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeComponent />,
  },

  {
    element: <GuestRoute />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/video",
    element: <VideoPage />,
  },

  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          { path: "/dashboard", element: <Home /> },
          { path: "/import", element: <Import /> },
          { path: "/statistic", element: <Statistika /> },
          { path: "/products", element: <Mahsulotlar /> },
          { path: "/export", element: <Export /> },
          { path: "/logistic", element: <Logistic /> },
          { path: "/marcet", element: <Marcet /> },
          { path: "/help", element: <Halp /> },
          { path: "/settings", element: <Settings /> },
          { path: "*", element: <PrivateError /> },
        ],
      },
    ],
  },
]);
