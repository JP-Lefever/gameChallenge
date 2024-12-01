import Header from "./Components/Header/Header";
import ProductCatalog from "./Components/Product_catalog/ProductCatalog";
import infoHead from "./assets/data/headInfo.json";
import "./App.css";
import type { headProps, listProps } from "./assets/lib/definitions";
import Filter from "./Components/filter/Filter";
import itemList from "./assets/data/itemList.json";
import { useState } from "react";
import style from "./app.module.css";
import ProductDetail from "./Components/product_detail/ProductDetail";

function App() {
	const { image, title }: headProps = infoHead;
	const catalog: listProps[] = itemList;
	const [userFilter, setUserFilter] = useState("");
	const [currentGame, setCurrentGame] = useState(0);
	const filteredCategory: listProps[] =
		userFilter === ""
			? catalog
			: catalog.filter((c) => c.category.includes(userFilter));
	console.log(filteredCategory);

	return (
		<body className={style.body}>
			<div>
				<Header title={title} image={image} />
				<Filter userFilter={userFilter} setUserFilter={setUserFilter} />
				<ProductCatalog
					filteredCategory={filteredCategory}
					setCurrentGame={setCurrentGame}
					currentGame={currentGame}
				/>
			</div>
			<div className={style.detail}>
				<h3 className={style.title}>Panier</h3>
				<ProductDetail item={filteredCategory[currentGame]} />
			</div>
		</body>
	);
}

export default App;
