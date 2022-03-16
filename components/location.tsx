import ReactMarkdown from "react-markdown";
import { locationAddressText, locationLink, locationText } from "../EDITME";
import styles from "../styles/Location.module.scss";
import Button from "./button";

const Location = () => {

    return (
        <div className={styles.location}>
            <h2 className={styles.sectionTitle}>Location</h2>
            <div className={styles.content}>
                <div className={styles.address}>
                    <ReactMarkdown>{locationAddressText}</ReactMarkdown>
                </div>
                <div className={styles.details}>
                    <ReactMarkdown>{locationText}</ReactMarkdown>
                </div>
                <div className={styles.cta}>
                    <Button
                        onClick={() => window.open(locationLink, "__blank")}
                        text="Get Directions"
                        variant="secondary"
                    />
                </div>
            </div>
        </div>
    )
}

export default Location;
