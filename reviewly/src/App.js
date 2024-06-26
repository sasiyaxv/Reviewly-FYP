import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import Register from "./components/Register";
import Login from "./components/Login";
import Analyse from "./components/Analyse";
import About from "./components/About";
import Contact from "./components/Contact";
import Previous from "./components/Previous";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/analyse",
    element: <Analyse />,
  },
  {
    path: "/about",
    element: <About />,
  },
  { path: "/previous", element: <Previous /> },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
