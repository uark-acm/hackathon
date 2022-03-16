import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { footerText } from "../EDITME";
import Button from "./button";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <Image
                    layout="fill"
                    src="img/jbhunt.svg"
                    alt="JB Hunt"
                    unoptimized
                    placeholder="blur"
                    blurDataURL="img/jbhunt.svg"
                />
            </div>
            <ReactMarkdown>{footerText}</ReactMarkdown>
            <Button
                className={styles.button}
                variant="tertiary"
                text="Back to Top ▲"
                onClick={() => window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })}
            />
        </footer>
    )
}

export default Footer;
