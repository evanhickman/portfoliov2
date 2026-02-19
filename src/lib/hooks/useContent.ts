import contactContent from '@/lib/content/contact';
import homeContent from '@/lib/content/home';
import workContent from '@/lib/content/work';

export const useContent = () => ({
	home: homeContent,
	work: workContent,
	contact: contactContent,
});

export const NAV_LINKS = [
	{ name: homeContent.navTitle, link: homeContent.url },
	{ name: workContent.navTitle, link: workContent.url },
	{ name: contactContent.navTitle, link: contactContent.url },
] as const;
