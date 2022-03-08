import ReactMarkdown from "react-markdown";
import { detailsText, detailsTitle } from "../EDITME";
import styles from "../styles/Details.module.scss";

const Details = () => {
    return(
        <div className={styles.details}>
            <div className={styles.content}>
                <h2 className={styles.sectionTitle}>{detailsTitle}</h2>
                <ReactMarkdown>{detailsText}</ReactMarkdown>
            </div>
        </div>
    )
}

export default Details;
