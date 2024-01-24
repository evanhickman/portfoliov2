import Link from 'next/link';

type BoxProps = {
  bgColor: string;
  title?: string;
  description?: string;
  link?: string;
  active?: boolean;
};

const Box = ({ bgColor, title, description, active }: BoxProps) => {
  return (
    <div className={`${bgColor} flex flex-col justify-center`}>
      <div className='pl-40'>
        {title && <h2 className='text-2xl text-black-900'>{title}</h2>}
      </div>
    </div>
  );
};

export default Box;
