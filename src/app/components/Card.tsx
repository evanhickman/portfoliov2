'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { PageContent } from '@/lib/content/types';

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

interface ExternalLinkProps {
	title?: string;
	link?: string;
	linkTitle?: string;
}

function ExternalLink({ title, link, linkTitle }: ExternalLinkProps) {
	return (
		<Link
			href={link || '#'}
			className="w-fit mt-3 border-solid border-cyan-100 color-shift-text hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 rounded"
			target="_blank"
			rel="noopener noreferrer"
			title={`Open ${title} in a new tab`}
			aria-label={`View ${title} site`}
		>
			<span className="flex items-center gap-1">
				{linkTitle || `Visit ${title}`}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="size-4"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
					/>
				</svg>
			</span>
		</Link>
	);
}
