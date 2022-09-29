import AuthWrapper from '../Auth';
import { TiUserOutline } from 'react-icons/ti';
import { FiLock } from 'react-icons/fi';
import { RiFacebookLine } from 'react-icons/ri';
import { BsInstagram } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { HiOutlineIdentification } from 'react-icons/hi';
import { FiUserCheck } from 'react-icons/fi';

const Register = (): JSX.Element => {
  return (
    <AuthWrapper>
      <div className="login-form lg:w-3/5 sm:w-full sm:mr-4  flex flex-col">
        <div className="px-4 h-full flex flex-col justify-center form-inputs lg:mb-6">
          <div>
            <div className="title-section lg:pb-2=3 sm:pb-2">
              <div className="flex flex-col pb-2">
                <h2 className="font-light pt-5 opacity-7 text-[#8c98a0] flex items-center">
                  User Register
                  <span className="bg-[#d9e0e5] ml-2 h-0.5 w-7"></span>
                </h2>
                <h1 className="font-bold lg:text-4xl sm:text-2xl capitalize text-[#0d3856] pt-7 pb-3 leading-relaxed">
                  Join us And make a difference
                </h1>
              </div>
            </div>
            <div className="login-divider bg-[#d9e0e5] h-0.5 w-full opacity-3 mb-4"></div>
          </div>
          <form className="w-full items-center pt-4 flex-col">
            <div className="flex double-group w-full gap-4">
              <div className="group-input flex flex-col py-2 w-1/2">
                <label htmlFor="email" className="text-[#8c98a0]">
                  Name
                </label>
                <div className="flex items-center bg-[#f1f6fa] rounded-3xl px-4 py-3 focus:bg-white input-group mt-2">
                  <TiUserOutline color="#8c98a0" size="20" />
                  <input
                    className="bg-transparent w-full outline-none pl-2 login-input"
                    type="email"
                    id="email"
                    name="email"
                  />
                </div>
              </div>
              <div className="group-input flex flex-col py-2 w-1/2 ">
                <label htmlFor="email" className="text-[#8c98a0]">
                  Username
                </label>
                <div className="flex items-center bg-[#f1f6fa] rounded-3xl px-4 py-3 focus:bg-white input-group mt-2">
                  <FiUserCheck color="#8c98a0" size="20" />
                  <input
                    className="bg-transparent w-full outline-none pl-2 login-input"
                    type="email"
                    id="email"
                    name="email"
                  />
                </div>
              </div>
            </div>

            <div className="flex double-group w-full gap-4">
              <div className="group-input flex flex-col py-2 w-1/2">
                <label htmlFor="email" className="text-[#8c98a0]">
                  Email
                </label>
                <div className="flex items-center bg-[#f1f6fa] rounded-3xl px-4 py-3 focus:bg-white input-group mt-2">
                  <MdOutlineAlternateEmail color="#8c98a0" size="20" />
                  <input
                    className="bg-transparent w-full outline-none pl-2 login-input"
                    type="email"
                    id="email"
                    name="email"
                  />
                </div>
              </div>
              <div className="group-input flex flex-col py-2 w-1/2 ">
                <label htmlFor="email" className="text-[#8c98a0]">
                  Profile Picture
                </label>
                <div className="flex items-center bg-[#f1f6fa] rounded-3xl px-4 py-3 focus:bg-white input-group mt-2">
                  <input
                    className=" profile-chooser w-full text-sm text-gray-900  rounded-lg  cursor-pointer dark:text-gray-400 focus:outline-none  dark:border-gray-600"
                    id="file_input"
                    type="file"
                    placeholder="Upload Profile Picture"
                  />
                </div>
              </div>
            </div>

            <div className="flex double-group w-full gap-4">
              <div className="group-input flex flex-col py-2 w-1/2">
                <label htmlFor="email" className="text-[#8c98a0]">
                  Employee Id
                </label>
                <div className="flex items-center bg-[#f1f6fa] rounded-3xl px-4 py-3 focus:bg-white input-group mt-2">
                  <HiOutlineIdentification color="#8c98a0" size="20" />
                  <input
                    className="bg-transparent w-full outline-none pl-2 login-input"
                    type="email"
                    id="email"
                    name="email"
                  />
                </div>
              </div>
              <div className="group-input flex flex-col py-2 w-1/2 ">
                <label htmlFor="email" className="text-[#8c98a0]">
                  Password
                </label>
                <div className="flex items-center bg-[#f1f6fa] rounded-3xl px-4 py-3 focus:bg-white input-group mt-2">
                  <FiLock color="#8c98a0" />
                  <input
                    className="bg-transparent w-full outline-none pl-2 login-input"
                    type="password"
                    id="password"
                    name="password"
                  />
                </div>
              </div>
            </div>

            <span className="flex justify-end text-[#8c98a0] pt-2">
              Forgot Password
            </span>
            <button
              className="bg-[#d51f97] text-[#fff] px-4 py-3 font-bold text-lg tracking-widest rounded-3xl w-full mt-5"
              type="submit"
            >
              Login
            </button>
          </form>
          <div className="pt-4">
            <span>Already have an account?</span>
            <span className="text-[#d51f97] ml-2 font-bold">Login</span>
          </div>
        </div>

        <div className=" flex pt-3 w-full px-3 items-center justify-center bg-[#d51f97] self-end bottom-section ">
          <span className=" h-0.5 bg-[#d9e0e5] w-1/4 mr-3"></span>
          <RiFacebookLine className="text-[#d9e0e5] text-lg mx-1" />
          <BsInstagram className="text-[#d9e0e5] text-md mx-1" />
          <span className=" h-0.5 bg-[#d9e0e5] w-1/4 ml-3"></span>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Register;
