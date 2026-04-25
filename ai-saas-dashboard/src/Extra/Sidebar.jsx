import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">Dashboard</Link>
      <Link to="/chat">Chat</Link>
      <Link to="/billing">Billing</Link>
    </div>
  );
};

export default Sidebar;