import { useAuthContext } from "../../../contexts/authContext";
import { Navigate, Outlet } from "react-router-dom";
import ROLES from "../../../Constants/ROLES";
import { PATHS } from "../../../Router/paths";

const AdminGuard = () => {
  const { role } = useAuthContext();

  if (role === ROLES.ADMIN) {
    return <Outlet />;
  } else {
    return <Navigate to={PATHS.HOME} replace={true} />;
  }
};

export default AdminGuard;
