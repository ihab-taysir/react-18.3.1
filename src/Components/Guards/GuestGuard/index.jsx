import React, { useContext } from "react";
import { authContext } from "../../../contexts/authContext";
import { Navigate } from "react-router-dom";
import ROLES from "../../../Constants/ROLES";
import { PATHS } from "../../../Router/paths";

const GuestGuard = ({ children }) => {
  const { role } = useContext(authContext);

  if (role === ROLES.USER) {
    return <Navigate to={PATHS.POSTS.ROOT} replace={true} />;
  }
  if (role === ROLES.ADMIN) {
    return <Navigate to={PATHS.ADMIN.ROOT} replace={true} />;
  }
  return children;
};

export default GuestGuard;
