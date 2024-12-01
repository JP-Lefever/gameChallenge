export type headProps = {
	title: string;
	image?: string;
};

export type listProps = {
	id: number;
	title: string;
	description: string;
	price: string;
	image: string;
	category: string;
};

export type filterProps = {
	userFilter: string;
	setUserFilter: (cat: string) => void;
};
