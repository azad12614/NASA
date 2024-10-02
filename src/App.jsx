import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx"
import Quiz from "./pages/Quiz.jsx"
import Goal13 from "./pages/Goal13.jsx"
import Plan from "./pages/Plan.jsx"
import A1 from "./pages/Article1.jsx";
import A2 from "./pages/Article2.jsx";
import A3 from "./pages/Article3.jsx";
import A4 from "./pages/Article4.jsx";
import A5 from "./pages/Article5.jsx";
import A6 from "./pages/Article6.jsx";
import A7 from "./pages/Article7.jsx";

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
    },
    {
      path: "/plan",
      element: <Plan />,
    },
    {
      path: "/article/1",
      element: <A1 />,
    },
    {
      path: "/article/2",
      element: <A2 />,
    },
    {
      path: "/article/3",
      element: <A3 />,
    },
    {
      path: "/article/4",
      element: <A4 />,
    },
    {
      path: "/article/5",
      element: <A5 />,
    },
    {
      path: "/article/6",
      element: <A6 />,
    },
    {
      path: "/article/7",
      element: <A7 />,
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
