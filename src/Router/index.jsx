import { useRoutes } from "react-router";
import { routes } from "./routes";
const Router = () => {
  const router = useRoutes(routes);
  return router;
};

export default Router;
