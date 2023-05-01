import { HTMLProps, ReactNode, MouseEventHandler } from "react";

type Props = {
    children: ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    styles?: HTMLProps<HTMLElement>["className"];
}

const Button = ({children, styles, onClick}: Props) => {
    return(
        <button className={`btn normal-case ${styles}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;