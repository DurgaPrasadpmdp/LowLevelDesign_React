import ToggleProtection from "../../Components/LLD/ProtectedRoutes/ToggleProtection";

const UnauthorizedRoute = () => {
  return (
    <>
      <div className="text-center">
        <ToggleProtection />
      </div>
      <div>
        you are UnAuthorized...... Check the above box to enable permission for
        me
      </div>
    </>
  );
};

export default UnauthorizedRoute;
