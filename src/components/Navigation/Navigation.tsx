import { navigationLinks } from "../../utils/content"
import LogoIcon from "../Icons/LogoIcon"
import DesktopDropdown from "./DesktopDropdown"


export default function Navigation() {
  return (
    <nav>
      <div>
        <a href="/">
          <LogoIcon className=""/>
          <span>GoTravel</span>
        </a>
        {navigationLinks.map((link) => (
          <li>{link.text}
          {link.dropdown && (<DesktopDropdown />)}
          </li>
        )
        )}
      </div>
    </nav>
  )
}
