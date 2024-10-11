// src/RouterList.js
import Layout from "./components/layout/Layout.jsx";
import Login from "./pages/Login.jsx";
import { createBrowserRouter } from "react-router-dom";
import BasicSettingRegion from "./pages/BasicSettingRegion.jsx";
import NickName from "./pages/NickName.jsx";
import BasicSettingCategory from "./pages/BasicSettingCategory.jsx";
import WrongPath from "./pages/WrongPath.jsx";
import WagUser from "./pages/WagUser.jsx";
import WagMain from "./pages/WagMain.jsx";
import UserUploadedList from "./pages/UserUploadedList.jsx";
import UserLayout from "./components/UserLayout.jsx";
import UserLikeList from "./pages/UserLikeList.jsx";
import SecuredRoute from "./components/SecuredRoute.jsx"; // Import ProtectedRoute
import LandingPage from "./pages/LandingPage.jsx";
import { Upload } from "./pages/Upload.jsx";
import UploadLayout from "./components/layout/UploadLayout.jsx";
import * as path from "node:path"; // Import LandingPage
import Detail from "./pages/Detail.jsx";
import LoginLayout from "./components/layout/LoginLayout.jsx";

export const RouterList = () => [
  {
    // Wrap login and intro routes with LoginLayout
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "intro",
        element: <LandingPage />,
      },
    ],
  },
  {
    // All other routes are protected
    path: "/",
    element: (
      // <SecuredRoute>
      <Layout />
      // </SecuredRoute>
    ),
    children: [
      {
        path: "basic",
        children: [
          {
            index: true,
            element: <WrongPath />,
          },
          {
            path: "nickname",
            element: <NickName />,
          },
          {
            path: "region",
            element: <BasicSettingRegion />,
          },
          {
            path: "category",
            element: <BasicSettingCategory />,
          },
          {
            path: "*",
            element: <WrongPath />,
          },
        ],
      },
    ],
  },
  {
    // Main page
    path: "main",
    element: <WagMain />,
  },
  {
    // User page routes
    path: "user",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <WrongPath />,
      },
      {
        // My Page
        path: "main",
        element: <WagUser />,
      },
      {
        // User's uploaded videos
        path: "uploaded",
        element: <UserUploadedList />,
      },
      {
        // User's liked videos
        path: "liked",
        element: <UserLikeList />,
      },
      {
        // User's liked videos
        element: <UploadLayout />,
        children: [
          {
            path: "dev",
            element: <Upload />
          },

        ]
      },
      {
        // User's liked videos
        path: "detail",
        element: <UploadLayout/>,
        children: [
          {
            path: "",
            element: <Detail />,
          }
        ]
      },
    ],
  },
  {
    path: "*",
    element: <WrongPath />,
  },
];

// Create the RouterObject using createBrowserRouter and RouterList function
export const RouterObject = createBrowserRouter(RouterList());
