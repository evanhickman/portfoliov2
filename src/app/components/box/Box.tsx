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
				} flex flex-col justify-center row-span-1 z-50 ${onClick ? 'cursor-pointer' : ''} transition-colors focus-visible:outline-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2`}
				initial={{ x: '100%' }}
				animate={{ x: 0 }}
				transition={{
					type: 'spring',
					duration: 0.6,
					delay: id * 0.1,
				}}
				exit={{ x: '100%' }}
				onClick={() => onClick?.(id)}
				tabIndex={0}
				role={onClick ? 'button' : undefined}
				onKeyDown={(e) => {
					if (onClick && (e.key === 'Enter' || e.key === ' ')) {
						onClick(id);
					}
				}}
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
