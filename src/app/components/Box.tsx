'use client';
import { AnimatePresence, motion } from 'framer-motion';
import type { PageContent } from '@/lib/content/types';

interface BoxProps {
	boxes: PageContent['boxes'];
	active: number | null;
	onClick?: (id: number) => void;
}

export default function Box({ boxes, active, onClick }: BoxProps) {
	console.log(boxes);
	return (
		<section
			className={`row-span-1 lg:row-span-0 lg:h-screen grid grid-cols-1 grid-rows-${boxes.length} gap-1.5`}
		>
			<AnimatePresence>
				{boxes.map((box) => (
					<motion.div
						key={box.id}
						className={`${
							active === box.id ? 'bg-black-900' : box.classNames
						} flex flex-col justify-center row-span-1 z-50 ${onClick ? 'cursor-pointer' : ''} transition-colors focus-visible:outline-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2`}
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						transition={{
							type: 'spring',
							duration: 0.6,
							delay: box.id * 0.1,
						}}
						exit={{ x: '100%' }}
						onClick={() => onClick?.(box.id)}
						tabIndex={onClick ? 0 : -1}
						role={onClick ? 'button' : undefined}
						onKeyDown={(e) => {
							if (onClick && (e.key === 'Enter' || e.key === ' ')) {
								onClick(box.id);
							}
						}}
					>
						<div className="px-9 lg:pl-40">
							{box.title && (
								<h2
									className={`${
										active === box.id ? 'text-black-50' : 'text-black-900'
									} text-2xl`}
								>
									{box.title}
								</h2>
							)}
						</div>
					</motion.div>
				))}
			</AnimatePresence>
		</section>
	);
}
