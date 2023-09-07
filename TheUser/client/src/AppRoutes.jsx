import Home from "./components/pages/Home";
import Users from "./components/pages/Users";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/users',
    element: <Users />
  }
];

export default AppRoutes;