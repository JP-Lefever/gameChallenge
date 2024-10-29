import { productCatalogProps } from "../../assets/lib/definitions";
import Product from "../product/Product";
import style from "./productCatalog.module.css";

function ProductCatalog({ category, setCurrentGame, currentGame }:productCatalogProps) {

	return (
			<section className={style.section}>
				{category.map((c) => (
					<Product key={c.id} items={c} setCurrentGame={setCurrentGame} currentGame={currentGame}  />			
				))}
			</section>
	);
}

export default ProductCatalog;
