// Presentation/UI Layer: Root application component
// Main entry point that sets up layout and routing

import { MainLayout } from './components/Layout/MainLayout';
import { Dashboard } from './pages/Dashboard';
import { useWeather } from './hooks/useWeather';

function App() {
  const { changeCity } = useWeather();

  return (
    <MainLayout
      onSearch={changeCity}
      userName="User Name"
    >
      <Dashboard />
    </MainLayout>
  );
}

export default App;
