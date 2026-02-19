'use client';
import { useState } from 'react';
import BoxContainer from '@/app/components/box/BoxContainer';
import CardContainer from '@/app/components/card/CardContainer';
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
			<CardContainer
				content={content}
				active={active}
				heading={content.heading}
			/>
			<BoxContainer boxes={content.boxes} active={active} onClick={onClick} />
		</>
	);
}
