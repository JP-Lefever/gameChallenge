export type headProps = {
	title: string;
	image?: string;
};

export type itemListProps = {
	id: number;
	title: string;
	description: string;
	price: number;
	image: string;
	category: string;
	plusInfo?:string;
	
};

export type filterProps = {
	userFilter: string;
	setUserFilter: (cat: string) => void;
};

export type productDetail = {
	item : {
		id: number;
	title: string;
	description: string;
	price: number;
	image: string;
	category: string;
	plusInfo?:string;
	}
	index: number;
	setIndex: (i: number) => void;
};
export type productCatalogProps= {
	category : string;
	currentGame : number,
	setCurrentGame : (num:number)=>void;

}
export type productProps= {
	items : {
		id: number;
	title: string;
	description: string;
	price: number;
	image: string;
	category: string;
	plusInfo?:string;
	}
	currentGame : number,
	setCurrentGame : (num:number)=>void;

}