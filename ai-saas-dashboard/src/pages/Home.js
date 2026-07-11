import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UsageStats from "../components/UsageStats";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <UsageStats />
    </div>
  );
};

export default Home;