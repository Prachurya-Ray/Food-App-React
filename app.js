import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Component/Header";
import Body from "./src/Component/Body";
import Footer from "./src/Component/Footer";
import About from "./src/Component/About";
import Error from "./src/Component/Error";
import Cart from "./src/Component/Cart";
import Contact from "./src/Component/Contact";
import RestaurentMenu from "./src/Component/RestaurentMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./src/Component/ShimmerUI";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import store from "./src/utils/store";

/*
                Header
                    - Logo
                    - Nav Iterm
                    - Cart
                Body
                    - Search Bar
                    - Restaurant List
                        ~ Restaurant Card
                            * Image
                            * Name
                            * Cusine
                            * Rating
                Footer
                    - Links
                    - Copyright
*/

const FoodieMart = lazy(() => import("./src/Component/FoodieMart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Prachurya!",
    mailId: "prachuryaray@gmail.com",
  });
  return (
    <React.Fragment>
      <Provider store={store}>
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurentMenu />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/foodiemart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <FoodieMart />
          </Suspense>
        ),
      },
    ],
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
