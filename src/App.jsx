import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './pages/SignIn'
import SignUp from './pages/SignUp';
import AdminPanel from './components/AdminPanel';
import Stats from './pages/Stats';
import AllJobs from './pages/AllJobs';
import AddJob from './pages/AddJob';
import Profile from './pages/Profile';
import Landing from './pages/Landing';
function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: 'admin',
      element: <AdminPanel />,
      children:[
        {
          index: true,
          element: <Stats />
        },
        {
          path: 'stats',
          element: <Stats />
        },
        {
          path: 'all_jobs',
          element: <AllJobs />
        },
        {
          path: 'add_job',
          element: <AddJob />
        },
        {
          path: 'profile',
          element: <Profile />
        },

      ]
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App
