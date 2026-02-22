'use client';
import { useState } from 'react';
import type { PageContent } from '@/lib/content/types';
import Box from './Box';
import Card from './Card';

interface PageClientProps {
	content: PageContent;
}

export default function PageClient({ content }: PageClientProps) {
	const [active, setActive] = useState<number | null>(null);

	const onClick = (id: number) => {
		setActive((prevId) => (prevId === id ? null : id));
	};

	return (
		<>
			<Card
				content={content}
				active={active}
				heading={content.heading}
				subheading={content.subheading}
			/>
			<Box boxes={content.boxes} active={active} onClick={onClick} />
		</>
	);
}
