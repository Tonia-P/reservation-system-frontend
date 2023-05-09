import Button from "../interaction/Button";
import { Link } from "react-router-dom";
import { TopNavbarTab } from "./TopNavbarTab";
import { useAuth } from "../../contexts/AuthContext";

type Props = {
  color?: "white" | "natural";
};

const TopNavbar = ({ color }: Props) => {

  const {authUser} = useAuth();
  return (
    <div
      className={`h-14 primary-500 text-${color} justify-center w-full flex`}
    >
      <div className="flex justify-between items-center w-3/4">
        <label className="normal-case">Logo</label>

        <div className="flex w-1/2 justify-between">
          <TopNavbarTab label="About Us" labelcolor={color}>
            <li>
              <a>Teammate 1</a>
            </li>
            <li>
              <a>Teammate 2</a>
            </li>
          </TopNavbarTab>

          <TopNavbarTab label="Resources" labelcolor={color}>
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </TopNavbarTab>

          <TopNavbarTab label="Pricing" labelcolor={color} />

          <TopNavbarTab label="GitHub" labelcolor={color} />
        </div>
        <div>
          <Link to="/login">
            <Button styles="btn-ghost mr-3">Login {authUser?.fname}</Button>
          </Link>

          <Link to="register">
            <Button styles="btn-secondary px-10">Join</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
