import { productCatalogProps } from "../../assets/lib/definitions";
import Product from "../product/Product";
import style from "./productCatalog.module.css";

function ProductCatalog({ category, setCurrentGame }: productCatalogProps) {
	return (
		<section className={style.section}>
			{category.map((c, i) => (
				<>
					<div key={c.name}>
						<Product key={c.id} items={c} />
						<button
							className={style.button}
							type="button"
							onClick={() => setCurrentGame(i)}
						>
							En savoir plus
						</button>
					</div>
				</>
			))}
		</section>
	);
}

export default ProductCatalog;
