import type { productProps } from "../../assets/lib/definitions";
import style from "./product.module.css";

function Product({ items ,setCurrentGame,currentGame}: productProps) {
	const { image, price, description, title, category} = items;
	


	
	return (
		<section className={style.section} >
			<img className={style.img} src={image} alt={title} />
			<div className={style.card}>
				<h2>{title}</h2>
				<p className={style.paragraf}>{description}</p>
				<aside className={style.price}>{price}</aside>
				<aside>{category}</aside>
				<button type="button">En savoir plus</button>
				
			</div>
		</section>
	);
}

export default Product;
