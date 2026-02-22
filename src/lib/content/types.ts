export interface BoxContent {
	id: number;
	title?: string;
	subtitle?: string;
	desc?: string;
	features?: string;
	link?: string;
	linkTitle?: string;
	image?: string;
	classNames: string;
	color?: string;
}

export interface PageContent {
	url: string;
	navTitle: string;
	heading: string;
	subheading?: string;
	boxes: BoxContent[];
}
