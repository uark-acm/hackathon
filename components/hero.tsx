import { registrationLink, startDate, subtitle } from '../EDITME';
import Button from './button';
import Burst from '../public/img/burst.svg';
import styles from '../styles/Hero.module.scss';

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
            <div className={styles.burst}>
                <Burst />
            </div>
            <div className={styles.content}>
                <SeasonText />
                <h1>Hackathon</h1>
                <h6>{subtitle}</h6>
                {
                    new Date(startDate) < new Date() ?
                        <p>Registration is now closed. Check back later for the next hackathon!</p>
                    :
                        <Button
                            onClick={() => window.open(registrationLink, "__blank")}
                            className={styles.cta}
                            text="Register Now"
                            variant="primary"
                        />
                }
            </div>
            <div className={styles.indicatorContainer}>
                <div className={styles.indicator}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}

export default Hero;
