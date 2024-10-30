import style from "./productDetail.module.css";

function ProductDetail({ item }) {
	const { image, price, description, title, category } = item;
	return (
		<section className={style.section}>
			<section className={style.section}>
				<img className={style.img} src={image} alt={title} />
				<div className={style.card}>
					<h2>{title}</h2>
					<p className={style.paragraf}>{description}</p>
					<aside className={style.price}>{price}</aside>
					<aside>{category}</aside>
				</div>
			</section>
		</section>
	);
}

export default ProductDetail;
