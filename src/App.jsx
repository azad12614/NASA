import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx"
import Quiz from "./pages/Quiz.jsx"
import Goal13 from "./pages/Goal13.jsx"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/quiz",
      element: <Quiz />,
    },
    {
      path: "/goal13",
      element: <Goal13 />,
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
