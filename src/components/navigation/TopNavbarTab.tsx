import { HTMLProps, ReactNode } from "react";

type Props = {
  label: string;
  labelcolor?: "white" | "natural";
  styles?: HTMLProps<HTMLElement>["className"];
  children?: ReactNode;
};

export const TopNavbarTab = ({ label, labelcolor, children, styles }: Props) => {
  return (
    <div className="dropdown dropdown-hover">
      <label  className={`normal-case ${labelcolor} btn btn-ghost m-1`}>
        {label}
      </label>
      {children && <div
        
        className={`dropdown-content ${
          styles ? styles : "menu p-2 shadow bg-base-100 rounded-box w-52"
        }`}
      >
        {children}
      </div>}
    </div>
  );
};
