import { AppMeta } from "newt-client-js";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

export function Footer({ app }: { app: AppMeta }) {
	return (
		<footer className={styles.Footer}>
			<div className={styles.Footer_Inner}>
				<Link href="/">
					<a href="#" className={styles.SiteName}>
						{app.icon?.type === "emoji" && (
							<span className={styles.SiteName_Icon}>{app.icon.value}</span>
						)}
						{app.icon?.type === "image" && (
							<span className={styles.SiteName_Icon}>
								<img src={app.icon.value} />
							</span>
						)}
						<div className={styles.SiteName_Text}>
							{app.name || app.uid || ""}
						</div>
					</a>
				</Link>
				<div className={styles.Link}>
					<a
						href="https://suzume.cc"
						rel="noreferrer noopener"
						target="_blank"
					>
						雀
					</a>
				</div>
			</div>
		</footer>
	);
}
