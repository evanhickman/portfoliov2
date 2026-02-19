'use client';
import { AnimatePresence, motion } from 'framer-motion';
import type { PageContent } from '@/lib/content/types';

interface BoxProps {
	boxes: PageContent['boxes'];
	active: number | null;
	onClick?: (id: number) => void;
}

const ANIMATION_CONFIG = {
	initial: { x: '100%' },
	animate: { x: 0 },
	exit: { x: '100%' },
};

export default function Box({ boxes, active, onClick }: BoxProps) {
	return (
		<section className="row-span-1 lg:row-span-0 lg:h-screen grid grid-cols-1 gap-1.5">
			<AnimatePresence>
				{boxes.map((box) => (
					<BoxItem
						key={box.id}
						box={box}
						isActive={active === box.id}
						isClickable={!!onClick}
						onClick={() => onClick?.(box.id)}
					/>
				))}
			</AnimatePresence>
		</section>
	);
}

interface BoxItemProps {
	box: PageContent['boxes'][0];
	isActive: boolean;
	isClickable: boolean;
	onClick: () => void;
}

function BoxItem({ box, isActive, isClickable, onClick }: BoxItemProps) {
	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter' || e.key === ' ') {
			onClick();
		}
	};

	return (
		<motion.div
			{...ANIMATION_CONFIG}
			transition={{
				type: 'spring',
				duration: 0.6,
				delay: box.id * 0.1,
			}}
			className={`
                flex flex-col justify-center row-span-1 z-50 transition-colors
                ${isActive ? 'bg-black-900' : box.classNames}
                ${isClickable ? 'cursor-pointer' : ''}
                focus-visible:outline-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2
            `}
			onClick={onClick}
			onKeyDown={handleKeyDown}
			tabIndex={isClickable ? 0 : -1}
			role={isClickable ? 'button' : undefined}
		>
			{box.title && (
				<div className="px-9 lg:pl-40">
					<h2
						className={`text-2xl ${
							isActive ? 'text-black-50' : 'text-black-900'
						}`}
					>
						{box.title}
					</h2>
				</div>
			)}
		</motion.div>
	);
}
