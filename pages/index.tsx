import type { NextPage } from 'next';
import { Dashboard } from "../components/dashboard";

const Home: NextPage = () => {
  return (
    <div className="p-0">
      <Dashboard />
    </div>
  );
};

export default Home;
