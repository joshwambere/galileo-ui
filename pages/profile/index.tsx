import ProfileForm from '../../components/Forms/ProfileForm';
import { SideMenu } from '../../components/dashboard/ui/sideMenu';
import WithPrivateRoute from '../../components/wrappers/PrivateRoutes';

const Profile = (): JSX.Element => {
  return (
    <div className="flex">
      <SideMenu />
      <ProfileForm />
    </div>
  );
};
export default WithPrivateRoute(Profile);
