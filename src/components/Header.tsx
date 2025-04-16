import { ReactElement } from "react";

interface HeaderProps {
  children: ReactElement[];
}

export default function Header({ children }: HeaderProps) {
  return <header className="px-24 pt-8 pb-23">{children}</header>;
}
