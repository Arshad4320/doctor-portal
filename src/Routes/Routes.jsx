import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Root from "../Root/Root";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import BookDetails from "../pages/bookDetails/bookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/about", element: <About /> },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/book-details/:id",
        loader: () => fetch("doctors.json"),
        element: <BookDetails />,
      },
    ],
  },
]);
