import Product from "../product/Product";
import style from "./productDetail.module.css"


function ProductDetail(item) {

	return <section className={style.section}>
	<Product  items={item.item}/>
	</section>
}

export default ProductDetail;
