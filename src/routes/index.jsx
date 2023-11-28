import { createBrowserRouter, RouterProvider } from "react-router-dom";


import AdminPanel from "../components/AdminPanel";
import Landing from "../pages/Landing";
import { lazy, Suspense } from "react";
import GlobalError from "../components/GlobalError";

const SignIn = lazy(() => import("../pages/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Stats = lazy(() => import("../pages/Stats"));
const AllJobs = lazy(() => import("../pages/AllJobs"));
const AddJob = lazy(() => import("../pages/AddJob"));
const Profile = lazy(() => import("../pages/Profile"));

function RouteIndex() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
      errorElement: <GlobalError/>
    },
    {
      path: "login",
      element: (
        <Suspense fallback={<p>Loading...</p>}>
          <SignIn />
        </Suspense>
      ),
    },
    {
      path: "signup",
      element: (
        <Suspense fallback={<p>Loading...</p>}>
          <SignUp />
        </Suspense>
      ),
    },
    {
      path: "admin",
      element: <AdminPanel />,
      children: [
        {
          index: true,
          element: <Stats />,
        },
        {
          path: "stats",
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <Stats />
            </Suspense>
          ),
        },
        {
          path: "all_jobs",
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <AllJobs />
            </Suspense>
          ),
        },
        {
          path: "add_job",
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <AddJob />
            </Suspense>
          ),
        },
        {
          path: "profile",
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <Profile />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default RouteIndex;
