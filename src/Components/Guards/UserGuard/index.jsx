import { useAuthContext } from "../../../contexts/authContext";
import { Navigate, Outlet } from "react-router-dom";
import ROLES from "../../../Constants/ROLES";
import { PATHS } from "../../../Router/paths";

const UserGuard = () => {
  // const { role } = useAuthContext();
  const role = ROLES.USER;

  if (role === ROLES.USER) {
    return <Outlet />;
  } else {
    return <Navigate to={PATHS.HOME} replace={true} />;
  }
};

export default UserGuard;
