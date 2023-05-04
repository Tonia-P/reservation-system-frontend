import Button from "../interaction/Button";
import { Link } from "react-router-dom";
import { HTMLProps } from "react";

type Props = {
  color?: "white" | "natural";
}

const TopNavbar = ({color}: Props) => {

  return (
    <div className={`h-14 primary-500 text-${color} justify-center w-full flex`}>
      <div className="flex justify-between items-center w-3/4">
        Logo
        <div className="flex w-1/2 justify-between">
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className={`normal-case ${color} btn btn-ghost m-1`}>
              About Us
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Teammate 1</a>
              </li>
              <li>
                <a>Teammate 2</a>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className={`normal-case ${color} btn btn-ghost m-1`}>
              Resources
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>


          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className={`normal-case ${color} btn btn-ghost m-1`}>
              Pricing
            </label>
          </div>

          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className={`normal-case ${color} btn btn-ghost m-1`}>
              GitHub
            </label>
          </div>
          
        </div>
        <div>
          <Link to="/login">
            <Button styles="btn-ghost mr-2">Login</Button>
          </Link>
          <Button styles="btn-secondary px-10">Join</Button>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
