import Link from "next/link";

const menuItems = (type: string) => {
  if (type == "partner") return [
    { href: "new-project", label: "New Project" },
    { href: "invite", label: "Invite Members" },
    { href: "users", label: "Users" },
    { href: "clients", label: "Clients" },
    { href: "projects", label: "Projects" },
    { href: "personae", label: "Personae" },
    { href: "settings", label: "Settings" },
  ];

  return [
    { href: "new-project", label: "New Project" },
    { href: "invite", label: "Invite Members" },
    { href: "users", label: "Users" },
    // { href: "clients", label: "Clients" },
    { href: "projects", label: "Projects" },
    { href: "personae", label: "Personae" },
    { href: "settings", label: "Settings" },
  ];
}

interface Props {
  type: string;
  tid: string;
  expanded: boolean;
  onExpand: () => void;
  onHover: () => void;
  onOut: () => void;
}

export default function Sidebar({ type, tid, expanded, onExpand, onHover, onOut }: Props) {
  const items = menuItems(type);

  return (
    <aside
      className={`bg-white fixed z-[1199] overflow-x-auto top-16 bottom-0 border-r ${expanded ? "w-48" : "w-14"}`}
      onMouseOver={onHover}
      onMouseOut={onOut}>
      <div className="relative w-full h-full">
        <nav className="flexs flex-coll w-full h-full">
          <div className="flex flex-col justify-between min-h-full overflow-auto">
            {/* Sidebar header */}
            <header className="flex flex-shrink-0 items-center sticky top-0 h-14 z-[1] border-b bg-white">
              <div className="px-6 font-medium">
                <Link href={`/${tid}`}>Home</Link>
              </div>
            </header>

            {/* Sidebar main */}
            <div className="w-full relative pt-2 pb-8 bg-white">
              <ul className="w-full">
                {items.map((item) => (
                  <SidebarItem key={item.href} label={item.label} href={`/${tid}/${item.href}`} />
                ))}
                <SidebarItem label="Whoami" href="/whoami" />
              </ul>
            </div>

            {/* Sidebar footer */}
            <footer className="block w-full flex-shrink-0 sticky bottom-0 mt-auto z-[1] bg-white">
              <button onClick={onExpand} className="w-full h-14">
                <div className="flex h-full w-full items-center border-t">
                  <div className="flex flex-shrink-0 h-full w-14 items-center justify-center">
                    <svg
                      className="w-[14px] h-[14px] text-[#50d71e] transition transform ease"
                      role="presentation"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                      focusable="false">
                      <path d="M8.707 8l5.797 5.796-.707.708L7.293 8l6.504-6.504.707.708L8.707 8z"></path>
                      <path d="M2.93 8l5.796 5.796-.707.708L1.516 8l6.503-6.504.707.708L2.93 8z"></path>
                    </svg>
                  </div>
                </div>
              </button>
            </footer>
          </div>
        </nav>
      </div>
    </aside>
  );
}

const SidebarItem = ({ label, href }: { label: string; href: string; }) => {
  return (
    <li className="text-[14px] font-medium">
      <Link href={href} className="flex flex-grow items-center ml-6 h-10">
        <div className="">{label}</div>
      </Link>
    </li>
  );
}