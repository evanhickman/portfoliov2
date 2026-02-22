import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: '404 - Page Not Found',
};

export default function NotFound() {
	return (
		<div className="flex h-screen flex-col items-center justify-center gap-6 px-12 text-center">
			<h1 className="text-8xl font-light text-neutral-50">404</h1>
			<p className="text-2xl color-shift-text">Page not found</p>
			<Link
				href="/"
				className="mt-4 rounded px-4 py-2 text-lg text-neutral-50 transition-colors hover:text-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
			>
				← Back home
			</Link>
		</div>
	);
}
