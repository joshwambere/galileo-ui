import Image from 'next/image';

type Props = {
  source: string;
};
export const ImageCard = ({ source }: Props): JSX.Element => {
  return (
    <div className="border-2 mt-2 border-[#d51f97] w-1/3 image-message-container rounded-md relative">
      <Image
        src={source}
        alt="Image"
        className="w-full"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};
