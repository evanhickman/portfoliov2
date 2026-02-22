'use client';
import { useEffect, useState } from 'react';
import type { PageContent } from '@/lib/content/types';
import BoxGroup from './BoxGroup';
import Card from './Card';

interface PageClientProps {
	content: PageContent;
}

export default function PageClient({ content }: PageClientProps) {
	const [active, setActive] = useState<number | null>(null);

	const onClick = (id: number) => {
		setActive((prevId) => (prevId === id ? null : id));
	};

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setActive(null);
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, []);

	return (
		<>
			<Card
				content={content}
				active={active}
				heading={content.heading}
				subheading={content.subheading}
			/>
			<BoxGroup boxes={content.boxes} active={active} onClick={onClick} />
		</>
	);
}
