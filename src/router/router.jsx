import { createBrowserRouter } from "react-router-dom";
import Layout from "../sections/Layout";
import Home from "../sections/Home";
import HistoiresLegendes from "../sections/HistoiresLegendes";
import Map from "../sections/Map";
import Bestiaire from "../sections/Bestiaire";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        { path: "/", element: <Home /> },
        { path: "histoire-et-legendes", element: <HistoiresLegendes /> },
        { path: "/map", element: <Map /> },
        { path: "bestiaire", element: <Bestiaire /> },
    ],
  },
]);