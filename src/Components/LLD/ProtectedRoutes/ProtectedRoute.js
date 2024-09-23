import ToggleProtection from "./ToggleProtection";

const ProtectedRoute = () => {
  return (
    <>
      <ToggleProtection />

      <div>
        I am a Protected component you can see me becuase you enable the
        Permission for me. Disable the ckeck box to protect me.
      </div>
    </>
  );
};

export default ProtectedRoute;
