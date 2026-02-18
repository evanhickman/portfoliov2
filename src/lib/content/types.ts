interface BoxContent {
	id: number;
	title?: string;
	subtitle?: string;
	desc?: string;
	features?: string;
	link?: string;
	image?: string;
	classNames: string;
}

export interface PageContent {
	url: string;
	navTitle: string;
	heading: string;
	subheading?: string;
	boxes: BoxContent[];
}
