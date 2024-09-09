import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx"
import Quiz from "./pages/Quiz.jsx"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/quiz",
      element: <Quiz />,
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
