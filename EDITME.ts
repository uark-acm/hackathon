// Site templating configs


/* -------------------------------------------------------------------------- */
/*                                   Content                                  */
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
 * UX Consideration: Maintain the spaces for consistency
 *   For example...
 *        "12:00 AM"
 *        " 7:00 AM"
 *   There is a space before the 7 to align it with 12:00 AM above. The site
 *   uses a monospaced font(Divenire Mono) for this to make it aligned but
 *   you still have to add the space to actually align the content.
 * 
 * Each entry in the array is an object with a time and text property.
 * The time property is the time of the entry. The text value is what
 * what happens at that time. 
 */
export const day1Schedule = [
    {
        time: " 5:30 PM",
        text: "Opening Session"
    },
    {
        time: " 8:00 PM",
        text: "Dinner"
    },
    {
        time: " 9:00 PM",
        text: "Final Project Approvals"
    }
];

export const day2Schedule = [
    {
        time: "12:00 AM",
        text: "Midnight Snack"
    },
    {
        time: " 7:00 AM",
        text: "Breakfast"
    },
    {
        time: " 4:00 PM",
        text: "Closing Session"
    }
];


/* -------------------------------------------------------------------------- */
/*                                 Site Config                                */
/* -------------------------------------------------------------------------- */
// TBD