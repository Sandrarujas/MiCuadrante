import { Bell, Moon, User } from "lucide-react";

function Header() {
  return (
    <header className="flex items-center justify-between bg-white shadow-sm p-4">
      <h1 className="text-2xl font-bold text-blue-600">
        📅 MiCuadrante
      </h1>

      <div className="flex gap-4">
        <Moon className="cursor-pointer" />
        <Bell className="cursor-pointer" />
        <User className="cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;