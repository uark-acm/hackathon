import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { detailsText, detailsTitle } from "../EDITME";
import styles from "../styles/Details.module.scss";

const Details = () => {
    return(
        <div className={styles.details}>
            <div className={styles.images}>
                <div className={styles.image1}>
                    <Image layout="fill" src="https://unsplash.it/0?random=1" />
                </div>
                <div className={styles.image2}>
                    <Image layout="fill" src="https://unsplash.it/0?random=2" />
                </div>
                <div className={styles.image3}>
                    <Image layout="fill" src="https://unsplash.it/0/0?random=3" />
                </div>
            </div>
            <div className={styles.content}>
                <h2 className={styles.sectionTitle}>{detailsTitle}</h2>
                <ReactMarkdown>{detailsText}</ReactMarkdown>
            </div>
        </div>
    )
}

export default Details;
