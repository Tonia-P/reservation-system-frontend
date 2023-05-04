import Button from "../interaction/Button"
import { SearchBar } from "./SearchBar"

export const SideMenu = () => {
    return(
        <div className="border-r-2 hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[17.5rem] pb-10 px-4 overflow-y-auto">
            
            <div className="flex flex-col">

            <SearchBar/>

            <Button styles="btn-ghost">Rooms</Button>
            <Button styles="btn-ghost">Events</Button>
            <Button styles="btn-ghost">Map</Button>

            <hr/>

            <Button styles="btn-ghost">My Reservations</Button>
            <Button styles="btn-ghost">My Events</Button>
            <Button styles="btn-ghost">Settings</Button>
            <Button styles="btn-ghost">Go Pro</Button>

            <hr/>

            <Button styles="btn-ghost">About</Button>
            <Button styles="btn-ghost">GitHub</Button>

            </div>
            
        </div>
    )
}