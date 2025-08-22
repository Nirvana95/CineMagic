import { createBrowserRouter } from "react-router";

import AppLayout from "./ui/AppLayout.tsx";
import Movie from "./Pages/Movie.tsx";
import App from "./Pages/App.tsx";
import ErrorPage from "./Pages/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    Component: AppLayout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        path: "/",
        Component: App,
        ErrorBoundary: ErrorPage,
      },
      {
        path: "/:movieId",
        Component: Movie,
        ErrorBoundary: ErrorPage,
      },
    ],
  },
]);

export default router;
