import "./styles/global.css";
import { createRoot } from 'react-dom/client'
import 'aos/dist/aos.css';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
