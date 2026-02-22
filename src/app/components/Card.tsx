'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import type { PageContent } from '@/lib/content/types';
import ExternalLink from './ExternalLink';

interface CardProps {
	heading: string;
	subheading?: string;
	content: PageContent;
	active: number | null;
}

const ANIMATION_CONFIG = {
	initial: { y: '100%' },
	animate: { y: 0 },
	exit: { opacity: 0 },
	transition: { type: 'spring' as const, duration: 0.5 },
};

export default function Card({
	heading,
	subheading,
	content,
	active,
}: CardProps) {
	const activeBox = content?.boxes?.find((box) => box.id === active);
	const isActive = active !== null;

	return (
		<div
			className={`row-span-2 lg:row-span-0 lg:max-h-screen flex flex-col justify-center px-12 pt-24 pb-12 ${
				isActive && 'overflow-y-auto'
			}`}
		>
			<AnimatePresence mode="wait">
				{!isActive ? (
					<TitleView key="title" heading={heading} subheading={subheading} />
				) : (
					<ContentView key={activeBox?.id} box={activeBox} />
				)}
			</AnimatePresence>
		</div>
	);
}

interface TitleViewProps {
	heading: string;
	subheading?: string;
}

function TitleView({ heading, subheading }: TitleViewProps) {
	return (
		<motion.div
			className="h-full flex flex-col justify-center"
			{...ANIMATION_CONFIG}
			layout
		>
			<h1 className="text-5xl">{heading}</h1>
			{subheading && (
				<h2 className="text-4xl mt-3 color-shift-text">{subheading}</h2>
			)}
		</motion.div>
	);
}

interface ContentViewProps {
	box?: PageContent['boxes'][0];
}

function ContentView({ box }: ContentViewProps) {
	if (!box) return null;

	return (
		<motion.div
			className="h-full flex flex-col overflow-scroll"
			{...ANIMATION_CONFIG}
			layout
		>
			<h1 className="text-5xl">{box.title}</h1>
			{box.subtitle && <h2 className="text-3xl mt-3">{box.subtitle}</h2>}
			{box.link && (
				<ExternalLink
					link={box.link}
					title={box?.title}
					linkTitle={box?.linkTitle}
				/>
			)}
			{box.image && (
				<Image
					src={box.image}
					alt={`Screenshot of ${box.title}`}
					className="mt-6 rounded-md shadow-md"
					width={1500}
					height={780}
				/>
			)}
			{box.features && <p className="mt-6 italic">{box.features}</p>}
			{box.desc && <p className="mt-3">{box.desc}</p>}
		</motion.div>
	);
}
