import Button from "../interaction/Button";
import { Link } from "react-router-dom";


const TopNavbar = ({}) => {
  return (
    <div className="h-14 primary-500 justify-center w-full flex">
      <div className="flex justify-between items-center w-3/4">
        Logo
        <div className="flex"></div>
        <div>
          <Link to="/login">
            <Button styles="btn-ghost">Login</Button>
          </Link>
          <Button styles="btn-secondary">Join</Button>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
