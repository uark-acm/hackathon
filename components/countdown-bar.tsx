import { useEffect, useState } from 'react';
import { startDate } from '../EDITME';
import styles from '../styles/CountdownBar.module.scss';

const CountdownBar = () => {
    const startTime = +new Date(startDate).getTime();
    const calculateTimeLeft = () => {
        const diff = startTime - +new Date();

        if(diff > 0) {
            return {
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24).toString().padStart(2, "0"),
                minutes: Math.floor((diff / (1000 * 60)) % 60).toString().padStart(2, "0"),
                seconds: Math.floor((diff / 1000) % 60).toString().padStart(2, "0")
            }
        } else {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            }
        }
    }
    const [{ days, hours, minutes, seconds}, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000)
    });

    return (
            <h1>{`${days}:${hours}:${minutes}:${seconds}`}</h1>
        </div>
    );
}

export default CountdownBar;
