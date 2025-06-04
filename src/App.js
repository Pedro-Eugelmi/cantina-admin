import AppRoutes from './routes';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';

function App() {
  const toast = useRef(null);

  return <AppRoutes />;
}

export default App;