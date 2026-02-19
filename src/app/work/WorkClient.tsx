'use client';
import { useState } from 'react';
import Box from '@/app/components/Box';
import Card from '@/app/components/Card';
import type { PageContent } from '@/lib/content/types';

interface WorkClientProps {
	content: PageContent;
}

export default function WorkContent({ content }: WorkClientProps) {
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
