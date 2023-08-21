import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.


const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
