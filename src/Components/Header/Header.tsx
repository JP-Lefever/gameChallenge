import type { headProps } from "../../assets/lib/definitions";
import style from "./header.module.css";
import "../../App.css";

function Header({ title }: headProps) {
	return (
		<header className={style.header}>
			<h1 className={style.title}>{title}</h1>
		</header>
	);
}

export default Header;
