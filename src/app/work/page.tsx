'use client';
import { useState } from 'react';
import BoxContainer from '@/app/components/box/BoxContainer';
import CardContainer from '@/app/components/card/CardContainer';
import content from '@/lib/content/work';

const Work = () => {
	const [active, setActive] = useState<number | null>(null);

	const onClick = (id: number) => {
		setActive((prevId) => (prevId === id ? null : id));
	};

	return (
		<main>
			<CardContainer content={content} active={active} heading="Work" />
			<BoxContainer boxes={content.boxes} active={active} onClick={onClick} />
		</main>
	);
};

export default Work;
