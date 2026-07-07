'use client';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
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

const REDUCED_ANIMATION_CONFIG = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
	transition: { duration: 0.01 },
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
			aria-live="polite"
		>
			<AnimatePresence mode="wait">
				{!isActive ? (
					<TitleView key="title" heading={heading} subheading={subheading} />
				) : (
					<ContentView key={activeBox?.id} box={activeBox} />
				)}
			</AnimatePresence>
			<CrawlableContent boxes={content?.boxes} />
		</div>
	);
}

function CrawlableContent({ boxes }: { boxes?: PageContent['boxes'] }) {
	const boxesWithContent = boxes?.filter((box) => box.title);
	if (!boxesWithContent?.length) return null;

	return (
		<div className="sr-only" aria-hidden="true">
			{boxesWithContent.map((box) => (
				<article key={box.id}>
					<h3>{box.title}</h3>
					{box.subtitle && <p>{box.subtitle}</p>}
					{box.features && <p>{box.features}</p>}
					{box.desc && <p>{box.desc}</p>}
					{box.link && (
						<a
							href={box.link}
							target="_blank"
							rel="noopener noreferrer"
							tabIndex={-1}
						>
							{box.linkTitle || `Visit ${box.title}`}
						</a>
					)}
				</article>
			))}
		</div>
	);
}

interface TitleViewProps {
	heading: string;
	subheading?: string;
}

function TitleView({ heading, subheading }: TitleViewProps) {
	const shouldReduceMotion = useReducedMotion();
	return (
		<motion.div
			className="h-full flex flex-col justify-center"
			{...(shouldReduceMotion ? REDUCED_ANIMATION_CONFIG : ANIMATION_CONFIG)}
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
	const shouldReduceMotion = useReducedMotion();
	if (!box) return null;

	return (
		<motion.div
			className="h-full flex flex-col overflow-scroll"
			{...(shouldReduceMotion ? REDUCED_ANIMATION_CONFIG : ANIMATION_CONFIG)}
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
