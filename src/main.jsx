import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import "./index.css";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import Body from "./components/Body.jsx";
import ResturantPage from "./components/ResturantPage.jsx";
import Cart from "./components/Cart.jsx";

const Grocery = lazy(()=> import("./components/Grocery.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/resturant/:resId", element: <ResturantPage /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Data is loading...</h1>}>
            {" "}
            <Grocery />{" "}
          </Suspense>
        ),
      },
      { path: "/cart", element: <Cart /> },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
