import Button from "../interaction/Button";
import { Link } from "react-router-dom";

type SideBarLinkType = {
    label: string;
    path: string;
    disabled?: boolean;
}

export const SideBarLink = ({label, path, disabled}: SideBarLinkType) => {
    return(
        <Link to={path} className="w-full">
            <Button styles={`btn-ghost w-full ${disabled && "disabled bg-transparent"}`}>
                {label}
            </Button>
        </Link>
    )
}