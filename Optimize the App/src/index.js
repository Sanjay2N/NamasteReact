import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contacts from "./components/contacts";
import ErrorComponent from "./components/ErrorComponent";

import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocerry";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
//lazy loading
const Grocery = lazy(() => import("./components/Grocerry"));

const Abount = lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          // <Suspense fallback={<h1>Loading ...</h1>}>
          <Abount />
          // </Suspense>
        ),
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading ...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

// root.render(<AppLayout />);
