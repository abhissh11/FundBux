import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import NotFound from "./components/NotFound";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import Campaigns from "./pages/Campaigns";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Donate from "./pages/Donate";
import CreateCampaign from "./pages/CreateCampaign";
// import CampaignDetail from "./pages/CampaignDetail"; // Import the new detail page
import CampaignDetails from "./pages/CampaignDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/campaigns",
        element: <Campaigns />,
      },
      {
        path: "/campaign/:id",
        element: <CampaignDetails />,
      },
      {
        path: "/donate",
        element: <Donate />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/create-campaign",
        element: <CreateCampaign />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
