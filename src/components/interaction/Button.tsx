import { HTMLProps, ReactNode } from "react";

type Props = {
    children: ReactNode;
    styles?: HTMLProps<HTMLElement>["className"];
}

const Button = ({children, styles}: Props) => {
    return(
        <button className={`btn normal-case ${styles}`} >
            {children}
        </button>
    )
}

export default Button;