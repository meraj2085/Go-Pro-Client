import { createBrowserRouter } from "react-router-dom";
import Checkout from "../components/Checkout/Checkout";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import UserProfile from "../components/UserProfile/UserProfile";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        loader: () => fetch("https://go-pro-server.vercel.app/courses"),
        element: <Courses></Courses>,
      },
      {
        path: "/courses/:id",
        loader: ({ params }) =>
          fetch(`https://go-pro-server.vercel.app/courses/${params.id}`),
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/courses/checkout/:id",
        loader: ({ params }) =>
          fetch(`https://go-pro-server.vercel.app/courses/${params.id}`),
        element: <Checkout></Checkout>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/userProfile",
        element: <UserProfile></UserProfile>,
      },
    ],
  },
]);
