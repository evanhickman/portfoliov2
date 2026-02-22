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
	const sharedMotionProps = {
		initial: { x: '100%', backgroundColor: box.color },
		animate: {
			x: 0,
			backgroundColor: isActive ? ACTIVE_COLOR : box.color,
		},
		transition: {
			x: { type: 'spring' as const, duration: 0.6, delay: box.id * 0.1 },
			backgroundColor: { duration: 0.2 },
		},
	};

	const sharedClassName = `
                flex flex-col justify-center row-span-1 z-50 w-full
                ${box.color ? '' : box.classNames}
                focus-visible:outline-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2
            `;

	const content = box.title ? (
		<div className="flex items-center justify-between px-9 lg:pl-40 lg:pr-16">
			<h2
				className={`text-2xl ${isActive ? 'text-black-50' : 'text-black-900'}`}
			>
				{box.title}
			</h2>
			{!isActive && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="size-5 text-black-900 shrink-0"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m8.25 4.5 7.5 7.5-7.5 7.5"
					/>
				</svg>
			)}
		</div>
	) : null;

	if (isClickable) {
		return (
			<motion.button
				type="button"
				{...sharedMotionProps}
				className={`${sharedClassName} cursor-pointer`}
				onClick={onClick}
				tabIndex={0}
			>
				{content}
			</motion.button>
		);
	}

	return (
		<motion.div {...sharedMotionProps} className={sharedClassName}>
			{content}
		</motion.div>
	);
}
