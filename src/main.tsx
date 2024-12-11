import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/globalStyles.css";
import "./language/i18n";

createRoot(document.getElementById("root")!).render(<App />);
