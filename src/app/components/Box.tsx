import Link from 'next/link';

type BoxProps = {
  boxClass: string;
  title?: string;
  description?: string;
  active?: boolean;
};

const Box = ({ boxClass, title, description, active }: BoxProps) => {
  return (
    <div
      className={`${boxClass} flex flex-col justify-center border-none cursor-pointer hover:scale-[1.01]`}
    >
      <div className='pl-40'>
        {title && <h2 className='text-2xl text-black-900'>{title}</h2>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default Box;
