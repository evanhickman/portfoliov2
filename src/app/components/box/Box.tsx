'use client';
import { AnimatePresence, motion } from 'framer-motion';
import type { BoxContent } from '@/lib/content/types';

type BoxProps = {
	id: BoxContent['id'];
	title?: BoxContent['title'];
	classNames: string;
	active: number | null;
	onClick?: (id: number) => void;
};

const Box = ({ title, id, classNames, active, onClick }: BoxProps) => {
	return (
		<AnimatePresence>
			<motion.div
				className={`${
					active === id ? 'bg-black-900' : classNames
				} flex flex-col justify-center row-span-1 cursor-pointer z-50`}
				initial={{ x: '100%' }}
				animate={{ x: 0 }}
				transition={{
					type: 'spring',
					duration: 0.6,
					delay: id * 0.1,
				}}
				exit={{ x: '100%' }}
				onClick={() => onClick && onClick(id)}
				tabIndex={0}
			>
				<div className="px-9 lg:pl-40">
					{title && (
						<h2
							className={`${
								active === id ? 'text-black-50' : 'text-black-900'
							} text-2xl`}
						>
							{title}
						</h2>
					)}
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default Box;
