import style from "./filter.module.css";
import type { filterProps } from "../../assets/lib/definitions";

function Filter({ setUserFilter }: filterProps) {
	return (
		<nav className={style.nav}>
			<section className={style.section}>
				<h2 className={style.title}>Filter</h2>
				<section className={style.filter}>
					<button
						className={style.button}
						type="button"
						onClick={() => setUserFilter("Jeux experts")}
					>
						Jeux expert
					</button>
					<button
						className={style.button}
						type="button"
						onClick={() => setUserFilter("Jeux coopératifs")}
					>
						Jeux coop
					</button>
					<button
						className={style.button}
						type="button"
						onClick={() => setUserFilter("Jeux famille")}
					>
						Jeux famille
					</button>
					<button
						className={style.button}
						type="button"
						onClick={() => setUserFilter("")}
					>
						Voir tout
					</button>
				</section>
			</section>
		</nav>
	);
}

export default Filter;
