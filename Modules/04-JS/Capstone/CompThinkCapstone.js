function getDays(firstDate, secondDate) {
return Math.abs(secondDate - firstDate)/86400000
//   The formula for converting milliseconds into the days is below
// (1000 milliseconds * (60 seconds * 60 minutes) * 24 hours) which equals to 86,400,000
}
