import { useContext } from "react";
import ToggleProtectedContext from "../Context/ToggleProtectedContext";
import UnauthorizedRoute from "./UnauthorizedRoute";

const RouteGuard = ({ children }) => {
  const { togglePermission } = useContext(ToggleProtectedContext);
  return <div>{togglePermission ? children : <UnauthorizedRoute />}</div>;
};

export default RouteGuard;
