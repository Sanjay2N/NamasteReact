import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import Body from "./components/Body";
import Contacts from "./components/contacts";
import ErrorComponent from "./components/ErrorComponent";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/AppStore";
import Cart from "./components/Cart";

const AppLayout = () => {
  const [userName, setUserName] = useState();
  //authentication
  useEffect(() => {
    //Api call for auth
    const data = { name: "sam" };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>

    //adding new context to app
    // <Provider store={appStore}>
    //   {/* <UserContext.Provider value={{ loggedInUser: userName, setUserName }}> */}
    //   <div className="app">
    //     {/* <UserContext.Provider value={{ loggedInUser: "dora" }}> */}
    //     <Header />
    //     {/* </UserContext.Provider> */}
    //     <Outlet />
    //   </div>
    //   {/* </UserContext.Provider> */}
    // </Provider>
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

// root.render(<AppLayout />);
