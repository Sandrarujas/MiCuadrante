import {
  House,
  Calendar,
  CheckSquare,
  Plane,
  BarChart3,
  Settings,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md h-screen p-4">
      <nav className="space-y-4">

        <div className="flex items-center gap-3">
          <House size={20} />
          Inicio
        </div>

        <div className="flex items-center gap-3">
          <Calendar size={20} />
          Calendario
        </div>

        <div className="flex items-center gap-3">
          <CheckSquare size={20} />
          Tareas
        </div>

        <div className="flex items-center gap-3">
          <Plane size={20} />
          Vacaciones
        </div>

        <div className="flex items-center gap-3">
          <BarChart3 size={20} />
          Estadísticas
        </div>

        <div className="flex items-center gap-3">
          <Settings size={20} />
          Ajustes
        </div>

      </nav>
    </aside>
  );
}

export default Sidebar;