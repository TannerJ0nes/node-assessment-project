// Import the 'moment' package
const moment = require('moment');

// Create a new moment object representing the current date and time
const now = moment();

// Format and display the current date and time
console.log('Current Date and Time:', now.format('YYYY-MM-DD HH:mm:ss'));

// Add or subtract days from the current date
const futureDate = now.add(7, 'days');
console.log('Date 7 days from now:', futureDate.format('YYYY-MM-DD'));

// Calculate the difference in days between two dates
const startDate = moment('2023-09-23');
const endDate = moment('2023-10-03');
const daysDifference = endDate.diff(startDate, 'days');
console.log('Days between two dates:', daysDifference);
