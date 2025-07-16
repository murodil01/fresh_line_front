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
import HomeComponent from "../components/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeComponent />,
  },

  {
    path: "/login",
    element: <Login />,
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
          { path: "/mahsulotlar", element: <Mahsulotlar /> },
          { path: "/export", element: <Export /> },
          { path: "/logistic", element: <Logistic /> },
          { path: "/marcet", element: <Marcet /> },
          { path: "/halp", element: <Halp /> },
          { path: "/settings", element: <Settings /> },
        ],
      },
    ],
  },
]);
