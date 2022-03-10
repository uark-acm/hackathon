// Site templating configs

/* ----------------- Key Settings to edit each Semester ---------------- */
// registrationLink
// startDate
// endDate
// day1Schedule
// day2Schedule



/* -------------------------------------------------------------------------- */
/*                   CORE SETTINGS (Update every Hackathon)                   */
/* -------------------------------------------------------------------------- */
/**
 * Start Date of the competition
 * Format: MM/DD/YYYY
 */
export const startDate = "04/01/2022";

/**
 * End Date of the competition
 * Format: MM/DD/YYYY
 */
export const endDate = "04/02/2022";

/**
 * Day 1 and Day 2 Schedules
 * Format (Time): H:MM AM|PM
 * Each entry in the array is an object with a time and text property.
 * The time property is the time of the entry. The text value is what
 * what happens at that time. 
 */
export const day1Schedule = [
    {
        time: "5:30 PM",
        text: "Opening Session"
    },
    {
        time: "8:00 PM",
        text: "Dinner"
    },
    {
        time: "9:00 PM",
        text: "Final Project Approvals"
    }
];

export const day2Schedule = [
    {
        time: "12:00 AM",
        text: "Midnight Snack"
    },
    {
        time: "7:00 AM",
        text: "Breakfast"
    },
    {
        time: "4:00 PM",
        text: "Closing Session"
    }
];


/* -------------------------------------------------------------------------- */
/*                                SITE CONTENT                                */
/* -------------------------------------------------------------------------- */
/**
 * Hero Section Subtitle
 * This is the text directly underneath the word "HACKATHON" in the first section.
 */
export const subtitle = "Presented by JB Hunt and Uark ACM";

/**
 * Event Details Section Title
 */
export const detailsTitle = "Hack-a-thon (noun)";

/**
 * Event Details Section Text
 * Format: Markdown
 * This text can be styled using Markdown syntax. It's similar to the syntax used in
 * Discord for posts and GitHub for READMEs.
 * Notice the arrow(>) in front of a bit of text. This markdown syntax has been overridden.
 * The block quote is meant to apply some extra color on top of any styling placed on that text.
 */
export const detailsText = `
**The J.B. Hunt Hackathon** is a competition co-hosted by the *Association of Computing Machinery (ACM)* at the *University of Arkansas*. It’s an overnight software engineering competition that takes place every semester.

**All students are welcome** to take part regardless of school, education level, or major. **All majors and backgrounds are welcome!** Students have a chance to use their skills to create a collaborative project within 24 hours. 

Teams compete to develop a working prototype to present in front of a panel of judges. **Judges from different technical backgrounds** are sourced from different companies across NWA.

> Join the next Hackathon and push your limits!
`;
