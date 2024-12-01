import type { listProps } from "../../assets/lib/definitions";
import Product from "../product/Product";
import style from "./productCatalog.module.css";

function ProductCatalog({
	filteredCategory,
	setCurrentGame,
}: {
	filteredCategory: listProps[];
	setCurrentGame: (s: number) => void;
	currentGame: number;
}) {
	return (
		<>
			<section className={style.section}>
				{filteredCategory.map((c) => (
					<Product key={c.id} items={c} setCurrentGame={setCurrentGame} />
				))}
			</section>
		</>
	);
}

export default ProductCatalog;
