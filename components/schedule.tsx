import { startDate, endDate, day1Schedule, day2Schedule } from "../EDITME";
import styles from "../styles/Schedule.module.scss";

const Schedule = () => {
    const parseDate = (numericalDate: string) => {
        const date = new Date(numericalDate);
        const dateString = date.toLocaleDateString('en-us', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        });

        if(date.getDate() > 3 && date.getDate() < 12) {
            return dateString + "th";
        } else {
            switch(date.getDate() % 10) {
                case 1: return dateString + "st";
                case 2: return dateString + "nd";
                case 3: return dateString + "rd";
                default: return dateString + "th";
            }
        }
    }

    const displaySchedule = (schedule: Array<{ time: string, text: string}>) => {
        return (
            <ul>
                {
                    schedule.map((entry, index) => {
                        return (
                            <li key={index}>
                                <span>{
                                    entry.time.length === 7 ?
                                        ' ' + entry.time
                                    :
                                        entry.time
                                }</span> - {entry.text}
                            </li>
                        )
                    })

                }                
            </ul>
        );
    }

    return (
        <div className={styles.schedule}>
            <h2 className={styles.sectionTitle}>Event Schedule</h2>
            <div className={styles.content}>
                <div className={styles.day}>
                    <h4>{parseDate(startDate)}</h4>
                    <div className={styles.list}>{displaySchedule(day1Schedule)}</div>
                </div>
                <div className={styles.day}>
                    <h4>{parseDate(endDate)}</h4>
                    <div className={styles.list}>{displaySchedule(day2Schedule)}</div>
                </div>
            </div>
        </div>
    )
}

export default Schedule;
