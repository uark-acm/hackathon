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
 * Registration form link
 */
export const registrationLink = "https://forms.gle/gFwrFeArJmq1YCMH9";

/**
 * Start Date of the competition
 * Format: MM/DD/YYYY
 */
export const startDate = "04/12/2024";

/**
 * End Date of the competition
 * Format: MM/DD/YYYY
 */
export const endDate = "04/13/2024";

/**
 * Registration Cutoff Time
 * Format: 24-hour HH:MM:SS
 * The time on day 1 at which the registration form should be closed
 */
export const registrationCutoffTime = "21:00:00";

/**
 * Countdown End Time
 * Format: 24-hour HH:MM:SS
 * The exact time at which the countdown runs out.
 */
export const countdownEndTime = "17:30:00";

/**
 * Day 1 and Day 2 Schedules
 * Format (Time): H:MM AM|PM
 * Each entry in the array is an object with a time and text property.
 * The time property is the time of the entry. The text value is what
 * what happens at that time. 
 */
export const day1Schedule = [
    {
        time: "TBD",
        text: "TBD"
    },
];

export const day2Schedule = [
    {
        time: "TBD",
        text: "TBD"
    },
];


/* -------------------------------------------------------------------------- */
/*                                SITE CONTENT                                */
/* -------------------------------------------------------------------------- */
/**
 * Hero Section Subtitle
 * This is the text directly underneath the word "HACKATHON" in the first section.
 */
export const subtitle = "Presented by UARK ACM";

/**
 * Location Section Text
 * Format: Markdown
 * This text can be styled using Markdown syntax. It's similar to the syntax used in
 * Discord for posts and GitHub for READMEs.
 */
export const locationText = `
Parking is available at the Harmon Avenue Parking Garage adjacent to the JBHT building.
`;

/**
 * Location Address Text
 * Format: Markdown
 * This should match the address link set in locationLink.
 * There are some overriding styles here that will remove the spacing between each line.
 * Notice the arrow(>) in front of a bit of text. This markdown syntax has been overridden.
 * The block quote is meant to apply some extra color on top of any styling placed on that text.
 */
export const locationAddressText = `
> Room 216

J.B. Hunt Transport Services Inc. Center for Academic Excellence (JBHT)

> 227 N. Harmon Ave.

> Fayetteville, AR 72701
`;

/**
 * Location Address Link
 * This is the link for the "Get Directions" button. This should be a google maps link.
 * The address on the resulting page should match the locationAddressText value.
 */
export const locationLink = "https://g.page/JBHT_Building?share";

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
**The UARK Hackathon** is a competition co-hosted by the *Association of Computing Machinery (ACM)* at the *University of Arkansas*. It’s an overnight software engineering competition that takes place every semester.

**All students are welcome** to take part regardless of school, education level, or major. **All majors and backgrounds are welcome!** Students have a chance to use their skills to create a collaborative project within 24 hours. 

Teams compete to develop a working prototype to present in front of a panel of judges. **Judges from different technical backgrounds** are sourced from different companies across NWA.

> Join the next Hackathon and push your limits!
`;

/**
 * Details Section Image File Names
 * Place images in the public/img directory and update the following variables with the file name(s)
 */
export const image1Name = "image1.jpg";
export const image2Name = "image2.jpg";
export const image3Name = "image3.jpg";

/**
 * Footer Text
 * If you change this, try to have some sort of direct contact somewhere else on the site.
 * UofA students and staff might be able to contact ACM but if an outside company or school
 * wants to get involved with the hackathon, they need some visible point of contact on the 
 * site they can reach out to.
 */
export const footerText = `
For questions, contact <jtn006@uark.edu>.
`;
