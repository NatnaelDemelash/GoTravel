import { NavigationLink } from "../../utils/contentTypes";

interface DesktopDropdownProps {
  links?: NavigationLink[];
}

export default function DesktopDropdown({ links }: DesktopDropdownProps) {
  return (
    <ul className="translatey-2 invisible absolute top-full -left-8 z-1 flex transform flex-col gap-y-7 rounded-tl-lg rounded-tr-2xl rounded-br-2xl rounded-bl-2xl bg-white pt-8 pr-16 pb-11 pl-8 opacity-0 drop-shadow-2xl transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      {links?.map((link) => (
        <li
          key={link.id}
          className="flex cursor-pointer items-center font-medium transition-all duration-200"
        >
          <a
            href={link.href}
            className="font-medium text-nowrap text-gray-600 hover:text-black"
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
