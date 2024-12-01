import type { listProps } from "../../assets/lib/definitions";
import style from "./productDetail.module.css";

function ProductDetail({ item }: { item: listProps }) {
	const { image, price, title } = item;
	return (
		<section className={style.sectionStick}>
			<img className={style.img} src={image} alt={title} />
			<h2>{title}</h2>
			<aside className={style.price}>{price}</aside>
		</section>
	);
}

export default ProductDetail;
