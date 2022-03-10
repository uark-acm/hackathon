import Image from "next/image";
import styles from "../styles/Footer.module.scss";
import Button from "./button";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <Image layout="fill" src="/img/jbhunt.svg" />
            </div>
            <p>24 hours to code, so grab a duck and join!</p>
            <Button className={styles.button} variant="tertiary" text="Back to Top ▲" />
        </footer>
    )
}

export default Footer;