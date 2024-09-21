import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Header";
import DisplayProducts from "./Components/InfiniteScroll/DisplayProducts";
import Accordian from "./Components/Accordian/Accordian";
import AutoComplete from "./Components/AutoComplete/AutoComplete";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import ServerSidePagination from "./Components/Pagination/ServerSidePagination";
import ClientSidePagination from "./Components/Pagination/ClientSidePagination";
import MultiLanguage from "./Components/MultiLanguage/MultiLanguage";
import NestedComments from "./Components/NestedComments/NestedComments";
import { YouTubeLiveChat } from "./Components/LiveChat/YouTubeLiveChat";
import RouteGuard from "./Utils/RouteGuards/RouteGuard";
import ProtectedRoute from "./Components/ProtectedRoutes/ProtectedRoute";

const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "infinite-scroll",
        element: <DisplayProducts />,
      },
      {
        path: "accordian",
        element: <Accordian />,
      },
      {
        path: "auto-complete",
        element: <AutoComplete />,
      },
      {
        path: "image-slider",
        element: <ImageSlider />,
      },
      {
        path: "client-side-pagination",
        element: <ClientSidePagination />,
      },
      {
        path: "server-side-pagination",
        element: <ServerSidePagination />,
      },
      {
        path: "multi-language-support",
        element: <MultiLanguage />,
      },
      {
        path: "nested-comments",
        element: <NestedComments />,
      },
      {
        path: "live-chat",
        element: <YouTubeLiveChat />,
      },
      {
        path: "protected-route",
        element: (
          <RouteGuard>
            <ProtectedRoute />
          </RouteGuard>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
