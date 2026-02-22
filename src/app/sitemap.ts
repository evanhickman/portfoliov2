import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://evanhickman.com',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: 'https://evanhickman.com/work',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8,
		},
		{
			url: 'https://evanhickman.com/contact',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5,
		},
	];
}
