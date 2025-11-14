// Presentation/UI Layer: Root application component
// Main entry point that sets up layout and routing

import { MainLayout } from './components/Layout/MainLayout';
import { Dashboard } from './pages/Dashboard';
import { useWeather } from './hooks/useWeather';
import { ThemeProvider } from './context/ThemeContext';


function App() {
  const { changeCity } = useWeather();

  return (
       <ThemeProvider>
    <MainLayout
      onSearch={changeCity}
      userName="User Name"
    >
      <Dashboard />
    </MainLayout>
    </ThemeProvider >
  );
}

export default App;
