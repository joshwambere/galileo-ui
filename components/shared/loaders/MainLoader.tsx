import { SmallSpinLoader } from './SmaillLoader';

const MainLoader = () => {
  return (
    <div
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      className="w-screen h-screen items-center flex justify-center absolute top-0 right-0 bottom-0 left-0"
    >
      <SmallSpinLoader />
    </div>
  );
};

export default MainLoader;
