import { BiPencil } from 'react-icons/bi';
import { generateHSL } from '../../../shared/utils/avatar/AvatarColorUtil';
import Image from 'next/image';

type Props = {
  _id: string;
  image: string;
  name: string;
  handleImageChange: (image: string) => void;
};
const ProfileImage = ({ _id, image, name, handleImageChange }: Props) => {
  return (
    <div className="rounded-full border-2 border-[#d51f97] w-24 h-24 relative bg-[#F4F5F7] mx-auto">
      {image ? (
        <div className="relative w-full h-full">
          <Image
            src={image}
            layout="fill"
            alt="profile"
            className="rounded-full"
            objectFit={'cover'}
          />
          <label>
            <input
              type="file"
              className="hidden hidden-input"
              onChange={e => {
                handleImageChange(URL.createObjectURL(e.target.files![0]));
              }}
            />
            <div className="absolute bg-[#d51f97] rounded-full p-1 bottom-0 right-0 border-2 border-white hover:cursor-pointer">
              <BiPencil className="text-[#ffffff] " />
            </div>
          </label>
        </div>
      ) : (
        <div style={{ background: _id && generateHSL(_id) }}>
          {name && name}
          <label>
            <input type="file" className="hidden hidden-input" />
            <div className="absolute bg-[#d51f97] rounded-full p-1 bottom-0 right-0 border-2 border-white hover:cursor-pointer">
              <BiPencil className="text-[#ffffff] " />
            </div>
          </label>
        </div>
      )}
    </div>
  );
};

export default ProfileImage;
