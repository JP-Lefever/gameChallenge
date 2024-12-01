import type { listProps } from "../../assets/lib/definitions";
import style from "./product.module.css";

function Product({
	items,
	setCurrentGame,
}: { items: listProps; setCurrentGame: (s: number) => void }) {
	const { image, price, description, title, category, id } = items;
	const handleClick = () => setCurrentGame(id - 1);

	return (
		<ul>
			<li>
				<section className={style.section}>
					<img className={style.img} src={image} alt={title} />
					<div className={style.card}>
						<h2>{title}</h2>
						<p className={style.paragraf}>{description}</p>
						<aside className={style.price}>{price}</aside>
						<aside>{category}</aside>
						<button
							className={style.button}
							type="button"
							onClick={handleClick}
						>
							Ajouter au panier
						</button>
					</div>
				</section>
			</li>
		</ul>
	);
}

export default Product;
