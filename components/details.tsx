import Image from "next/image";
import ReactMarkdown from "react-markdown";
import {
    detailsText,
    detailsTitle,
    image1Name,
    image2Name,
    image3Name,
    registrationLink
} from "../EDITME";
import styles from "../styles/Details.module.scss";
import Button from "./button";

const Details = () => {
    return(
        <div className={styles.details}>
            <div className={styles.images}>
                <div className={styles.image1}>
                    <Image
                        layout="fill"
                        src={`/img/${image1Name}`}
                        alt=""
                        unoptimized
                        placeholder="blur"
                        blurDataURL={`/img/${image1Name}`}
                    />
                </div>
                <div className={styles.image2}>
                    <Image
                        layout="fill"
                        src={`/img/${image2Name}`}
                        alt=""
                        unoptimized
                        placeholder="blur"
                        blurDataURL={`/img/${image2Name}`}
                    />
                </div>
                <div className={styles.image3}>
                    <Image
                        layout="fill"
                        src={`/img/${image3Name}`}
                        alt=""
                        unoptimized
                        placeholder="blur"
                        blurDataURL={`/img/${image3Name}`}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <h2 className={styles.sectionTitle}>{detailsTitle}</h2>
                <ReactMarkdown>{detailsText}</ReactMarkdown>
                <div className={styles.cta}>
                    <Button
                        onClick={() => window.open(registrationLink, "__blank")}
                        className={styles.cta}
                        text="Register Now"
                        variant="primary"
                    />
                </div>
            </div>
        </div>
    )
}

export default Details;
