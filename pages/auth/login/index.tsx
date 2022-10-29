import LoginPage from '../../../components/Forms/LoginPage';
import WithPublicRoute from '../../../components/wrappers/PublicWrapper';

const Authenticate = (): JSX.Element => {
  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default WithPublicRoute(Authenticate);
