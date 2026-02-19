import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
	heading: string;
	subheading: string;
	contentTitle: string;
	contentSubtitle: string;
	desc: string;
	link: string;
	features: string;
	image: string;
}

export default function Card({
	heading,
	subheading,
	contentTitle,
	contentSubtitle,
	desc,
	link,
	features,
	image,
}: Partial<CardProps>) {
	return (
		<>
			{heading && <h1 className="text-5xl">{heading}</h1>}
			{subheading && (
				<h2 className="text-4xl mt-3 color-shift-text">{subheading}</h2>
			)}
			{contentTitle && <h1 className="text-5xl">{contentTitle}</h1>}
			{contentSubtitle && (
				<h2 className="text-3xl mt-3 color">{contentSubtitle}</h2>
			)}
			{link && (
				<Link
					href={link}
					className="w-fit mt-3 border-solid border-cyan-100 color-shift-text hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 rounded"
					target="_blank"
					rel="noopener noreferrer"
					title="Open link in a new tab"
					tabIndex={0}
				>
					<span className="flex items-center gap-1">
						View Site
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="size-4"
						>
							<title>Open link in a new tab</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
							/>
						</svg>
					</span>
				</Link>
			)}
			{image && (
				<Image
					src={image}
					alt="Screenshot of site"
					className="mt-6 rounded-md shadow-md"
					width={1500}
					height={780}
				/>
			)}
			{features && <p className="mt-6 italic">{features}</p>}
			{desc && <p className="mt-3">{desc}</p>}
		</>
	);
}
