import Image from 'next/image';

type Props = {
  source: string;
  right: boolean;
};
export const ImageCard = ({ source, right }: Props): JSX.Element => {
  return (
    <div
      className={
        right
          ? ` border-2 mt-2 border-[#d51f97] w-1/3 image-message-container rounded-md relative ml-3 right-bubble-cont mt-2  mb-4 relative`
          : `border-2 mt-2 border-[#d51f97] w-1/3 image-message-container rounded-md relative left-bubble-cont mt-2 mb-4 relative`
      }
    >
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
