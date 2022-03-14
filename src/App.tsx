import "./App.css";
import { useRoutes } from "react-router-dom";
import { Home } from "./components/Home";
import { DisplayAsteroidData } from "./components/DisplayAsteroidData";
import { ToastContainer } from "react-toastify";

function App() {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/:id", element: <DisplayAsteroidData /> },
  ]);
  return routes;
}

export function AppWrapper() {
  return (
    <>
      <ToastContainer position="top-center" autoClose={5000} />
      <App />
    </>
  );
}
