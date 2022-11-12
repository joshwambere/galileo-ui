import { Manage } from '../../components/pm/Manage';
import PMPrivateRoute from '../../components/wrappers/PmRoutes';

const manage = (): JSX.Element => {
  return (
    <div className="p-0 min-h-screen">
      <Manage />
    </div>
  );
};
export default PMPrivateRoute(manage);
