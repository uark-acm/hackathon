import { subtitle } from '../EDITME';
import styles from '../styles/Hero.module.scss';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <h1>Hackathon</h1>
                <h6>{subtitle}</h6>
            </div>
        </div>
    );
}

export default Hero;
