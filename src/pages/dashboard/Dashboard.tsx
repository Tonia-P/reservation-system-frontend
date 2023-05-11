import { Outlet } from "react-router-dom"
import { SideMenu } from "../../components/navigation/SideMenu"

export const Dashboard = () => {
    return(
        <div>

            <SideMenu />
            
            <div className="lg:pl-[20rem] lg:pr-3">

            <Outlet />
            </div>
        </div>
    )
}