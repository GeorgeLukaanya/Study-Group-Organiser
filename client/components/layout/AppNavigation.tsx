import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/dashboard", label: "Schedule" },
  { to: "/group/ui-design", label: "Tasks" },
  { to: "/group/ui-design/resources", label: "Resources" },
];

export function AppNavigation() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 sm:px-12">
        <div className="flex items-center gap-3 text-gray-900">
          <div className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 text-sm font-semibold">
            SG
          </div>
          <span className="text-lg font-semibold">Study Group Organizer</span>
        </div>
        <nav className="flex items-center gap-8 text-sm font-medium text-gray-600">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "text-gray-900" : "hover:text-gray-900"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
