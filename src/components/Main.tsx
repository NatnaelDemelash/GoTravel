import { ReactElement } from "react";

interface MainProps {
  children: ReactElement[];
}

export default function Main({ children }: MainProps) {
  return <main>{children}</main>;
}
