import { startDate, subtitle } from '../EDITME';
import styles from '../styles/Hero.module.scss';
import Button from './button';

const Hero = () => {
    const SeasonText = () => {
        const date = new Date(startDate);
        let text = "";
        if(date.getMonth() <= 6) {
            text = "Spring";
        } else {
            text = "Fall";
        }
        text += " " + date.getFullYear();

        return (
            <h2>
                {
                    Array.from(text).map((char, index) => {
                        return <div key={index}>{char}</div>
                    })
                }
            </h2>
        )
    }
    

    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <SeasonText />
                <h1>Hackathon</h1>
                <h6>{subtitle}</h6>
                {
                    new Date(startDate) < new Date() ?
                        <p>Registration is now closed. Check back later for the next hackathon!</p>
                    :
                        <Button
                            className={styles.cta}
                            text="Register Now"
                            variant="primary"
                        />
                }
            </div>
        </div>
    );
}

export default Hero;
