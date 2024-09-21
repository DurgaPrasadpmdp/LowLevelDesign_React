import { useContext } from "react";
import ToggleProtectedContext from "../../Utils/Context/ToggleProtectedContext";

const ToggleProtection = () => {
  const { togglePermission, setTogglePermission } = useContext(
    ToggleProtectedContext
  );
  // console.log(CheckBoxValue, "check");
  return (
    <div className=" text-center mt-2 ">
      <input
        id="permission"
        name="permission"
        className="cursor-pointer"
        type="checkbox"
        checked={togglePermission}
        onChange={(e) => {
          //console.log(e.target.checked);
          setTogglePermission(e.target.checked);
        }}
      />

      <label
        htmlFor="permission"
        className="d-inline-block ml-2 cursor-pointer"
      >
        Check here to enable the authorization ( this is for protected route)
      </label>
    </div>
  );
};

export default ToggleProtection;
