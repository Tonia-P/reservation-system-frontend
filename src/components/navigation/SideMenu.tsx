import Button from "../interaction/Button";
import { SearchBar } from "./SearchBar";
import { SideBarLink } from "./SideBarLink";

export const SideMenu = () => {
  return (
    <div className="border-r-2 hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[17.5rem] pb-10 px-4 overflow-y-auto">
      <div className="flex flex-col">
        <SearchBar />

        <SideBarLink path="rooms" label="Rooms" />
        <SideBarLink path="events" label="Events" />
        <SideBarLink path="map" label="Map" disabled />

        <hr />

        <SideBarLink path="my reservations" label="My Reservations" />
        <SideBarLink path="my events" label="My Events" />
        <Button styles="btn-ghost">Settings</Button>
        <Button styles="btn-ghost btn-disabled bg-transparent">Go Pro</Button>

        <hr />

        <Button styles="btn-ghost">About</Button>
        <Button styles="btn-ghost">GitHub</Button>
      </div>
    </div>
  );
};
