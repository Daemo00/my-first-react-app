import {createRoot} from 'react-dom/client';
import './styles.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
      <App />
    </StrictMode>,
);
