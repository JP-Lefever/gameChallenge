import Header from "./Components/Header/Header";
import ProductCatalog from "./Components/Product_catalog/ProductCatalog";
import infoHead from "./assets/data/headInfo.json";
import "./App.css";
import type { headProps, itemListProps } from "./assets/lib/definitions";
import Filter from "./Components/filter/Filter";
import itemList from "./assets/data/itemList.json";
import { useState } from "react";
import style from "./app.module.css";
import ProductDetail from "./Components/product_detail/ProductDetail";

function App() {
	const { image, title }: headProps = infoHead;
	const catalog: itemListProps[] = itemList;
	const [userFilter, setUserFilter] = useState("");
	const filteredCategory =
		userFilter === ""
			? catalog
			: catalog.filter((c) => c.category.includes(userFilter));
	const [currentGame, setCurrentGame] = useState(catalog[0]);
	
	return (
		<body className={style.body}>
			<Header title={title} image={image} />
			<Filter
				category={catalog}
				userFilter={userFilter}
				setUserFilter={setUserFilter}
				/>		
			<ProductCatalog
				category={filteredCategory}
				setCurrentGame={setCurrentGame}
				/>
			<div className={style.detail}>
					<h3 className={style.title}>EN SAVOIR PLUS ?</h3>
			<ProductDetail item={currentGame}/>
			</div>
			
		</body>
	);
}


export default App;