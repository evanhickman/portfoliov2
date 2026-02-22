'use client';
import { motion } from 'framer-motion';
import type { PageContent } from '@/lib/content/types';

const ACTIVE_COLOR = '#171717';

interface BoxProps {
	boxes: PageContent['boxes'];
	active: number | null;
	onClick?: (id: number) => void;
}

export default function Boxes({ boxes, active, onClick }: BoxProps) {
	return (
		<section className="row-span-1 lg:row-span-0 lg:h-screen grid grid-cols-1 gap-1.5">
			{boxes.map((box) => (
				<BoxItem
					key={box.id}
					box={box}
					isActive={active === box.id}
					isClickable={!!onClick}
					onClick={() => onClick?.(box.id)}
				/>
			))}
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
			initial={{ x: '100%', backgroundColor: box.color }}
			animate={{
				x: 0,
				backgroundColor: isActive ? ACTIVE_COLOR : box.color,
			}}
			transition={{
				x: { type: 'spring', duration: 0.6, delay: box.id * 0.1 },
				backgroundColor: { duration: 0.2 },
			}}
			className={`
                flex flex-col justify-center row-span-1 z-50
                ${box.color ? '' : box.classNames}
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
