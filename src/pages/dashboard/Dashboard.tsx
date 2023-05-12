import { Outlet } from "react-router-dom";
import { SideMenu } from "../../components/navigation/SideMenu";

export const Dashboard = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
      <SideMenu />

      <div className="lg:pl-[20rem] lg:pr-3">
        <Outlet />
      </div>
    </div>
  );
};
