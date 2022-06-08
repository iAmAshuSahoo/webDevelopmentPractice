//Problem Statement
// Practicing Comparisons
// Let’s practice working with value types and comparisons (Chapter 4, Pillar
// 3) where coercion will need to be involved.
// scheduleMeeting(..) should take a start time (in 24-hour format as a string
// “hh:mm”) and a meeting duration (number of minutes). It should return true
// if the meeting falls entirely within the work day (according to the times
// specified in dayStart and dayEnd); return false if the meeting violates the
// work day bounds.

const dayStart = "07:30";
const dayEnd = "17:45";

function setTiming (time, duration = 0) {
    const currentDate = new Date();
    let dateTime = new Date(currentDate);
    dateTime.setHours(time.split(":")[0], parseInt(time.split(":")[1]) + duration, 00)
    dateTime = dateTime.getTime();
    return dateTime;
}
function scheduleMeeting(startTime,durationMinutes) {
 // ..TODO..
    let dayStartDate = setTiming(dayStart);  
    let dayEndDate = setTiming(dayEnd);
    let meetingTime = setTiming(startTime);
    let meetingDuration = setTiming(startTime, durationMinutes);
    if ((dayStartDate <= meetingTime) && (meetingDuration <= dayEndDate)) {
        return true;
    }
    return false;
}
console.log(scheduleMeeting("7:00",15)) // false
console.log(scheduleMeeting("07:15",30)); // false
console.log(scheduleMeeting("7:30",30)) // true
console.log(scheduleMeeting("11:30",60)); // true
console.log(scheduleMeeting("17:00",45)); // true
console.log(scheduleMeeting("17:30",30)); // false
console.log(scheduleMeeting("18:00",15)); // false