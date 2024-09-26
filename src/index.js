import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Header";
import DisplayProducts from "./Components/LLD/InfiniteScroll/DisplayProducts";
import Accordian from "./Components/LLD/Accordian/Accordian";
import AutoComplete from "./Components/LLD/AutoComplete/AutoComplete";
import ImageSlider from "./Components/LLD/ImageSlider/ImageSlider";
import ServerSidePagination from "./Components/LLD/Pagination/ServerSidePagination";
import ClientSidePagination from "./Components/LLD/Pagination/ClientSidePagination";
import MultiLanguage from "./Components/LLD/MultiLanguage/MultiLanguage";
import NestedComments from "./Components/LLD/NestedComments/NestedComments";
import { YouTubeLiveChat } from "./Components/LLD/LiveChat/YouTubeLiveChat";
import RouteGuard from "./Utils/RouteGuards/RouteGuard";
import ProtectedRoute from "./Components/LLD/ProtectedRoutes/ProtectedRoute";
import ShortPolling from "./Components/LLD/RealTimeUpdates/ShortPolling";
import LongPolling from "./Components/LLD/RealTimeUpdates/LongPolling";

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
      {
        path: "short-polling",
        element: <ShortPolling />,
      },
      {
        path: "long-polling",
        element: <LongPolling />,
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
