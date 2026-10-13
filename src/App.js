import './App.css';
import { ApiProvider } from './contexts/ApiContext';
import Tanuloszobak from './components/Tanuloszobak';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ApiProvider>
      <Tanuloszobak />
    </ApiProvider>
  );
}

export default App;
