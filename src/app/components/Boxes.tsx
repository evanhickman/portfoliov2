'use client';
import type { PageContent } from '@/lib/content/types';
import BoxItem from './BoxItem';

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
