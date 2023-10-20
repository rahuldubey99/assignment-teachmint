import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UsersList from "./components/UsersList";
import UserProfile from "./components/UserProfile";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UsersList/>,
    },
    {
      path:"/user/:userId",
      element: <UserProfile/>,
    },
  ]);
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
