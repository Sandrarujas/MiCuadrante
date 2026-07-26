import Layout from "../../components/Layout/Layout/Layout";
import Card from "../../components/Card/Card";

function Home() {
  return (
    <Layout>
      <h1 className="text-5xl font-bold text-blue-600 mb-6">
        📅 MiCuadrante
      </h1>

      <Card title="📅 Hoy">
        <p className="text-lg">🌙 Turno de noche</p>
        <p className="text-gray-500">20:45 - 08:45</p>
      </Card>

      <Card title="📋 Próximos turnos">
        <p>🌙 Viernes</p>
        <p>🌙 Sábado</p>
        <p>🌙 Domingo</p>
      </Card>
    </Layout>
  );
}

export default Home;