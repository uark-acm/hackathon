import { useEffect, useState } from 'react';
import { countdownEndTime, endDate, startDate } from '../EDITME';
import styles from '../styles/CountdownBar.module.scss';

const CountdownBar = () => {
    const startTime = +new Date(startDate + " " + countdownEndTime).getTime();
    const calculateTimeLeft = () => {
        const diff = startTime - +new Date();

        if(diff > 0) {
            return {
                days: Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, "0"),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24).toString().padStart(2, "0"),
                minutes: Math.floor((diff / (1000 * 60)) % 60).toString().padStart(2, "0"),
                seconds: Math.floor((diff / 1000) % 60).toString().padStart(2, "0")
            }
        } else {
            return {
                days: "00",
                hours: "00",
                minutes: "00",
                seconds: "00"
            }
        }
    }
    const [{ days, hours, minutes, seconds}, setTimeLeft] = useState(calculateTimeLeft());
    const dateRange = (new Date(startDate)).toLocaleDateString("en-us", {
        month: "long",
        day: "numeric"
    }) + "-" + +new Date(endDate).getDate();

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000)
    });

    return (
        <div className={styles.bar}>
            <h1 suppressHydrationWarning>{`${days}:${hours}:${minutes}:${seconds}`}</h1>
            <div>
                <div className={styles.date}>
                    <span>{dateRange}</span> {+new Date(startDate).getFullYear()}
                </div>
            </div>
        </div>
    );
}

export default CountdownBar;
