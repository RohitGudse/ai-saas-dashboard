import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Billing from "./pages/Billing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;