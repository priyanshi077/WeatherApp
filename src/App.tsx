// Presentation/UI Layer: Root application component
// Main entry point that sets up layout and routing

import { MainLayout } from './components/Layout/MainLayout';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <MainLayout
      onSearch={(query) => console.log('Search:', query)}
      userName="User Name"
    >
      <Dashboard />
    </MainLayout>
  );
}

export default App;
