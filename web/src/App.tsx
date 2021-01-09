import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';

function App() {
  return (
    <div>
      <Routes />
      <ToastContainer />
    </div>
  );
}

export default App;
