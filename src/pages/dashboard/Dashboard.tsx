import { Outlet } from "react-router-dom"
import { SideMenu } from "../../components/navigation/SideMenu"

export const Dashboard = () => {
    return(
        <div>

            <SideMenu />
            
            <div className="lg:pl-[19.5rem]">

            <Outlet />
            </div>
        </div>
    )
}