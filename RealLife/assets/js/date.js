//calendar date

let today = new Date().toISOString().slice(0, 10);
let year = today.slice (0,4);
let month = today.slice (5,7);
let date = today.slice (8,10);


if (parseInt(month) === 02) {
    month = 'February'}

    else if (parseInt(month) === 01) {
        month = 'January'}

else if (parseInt(month) === 03) {
    month = 'March'
}
else if (parseInt(month) === 04) {
    month = 'April'
}
else if (parseInt(month) === 05) {
    month = 'May'
}
else if (parseInt(month) === 06) {
    month = 'June'
}
else if (parseInt(month) === 07) {
    month = 'July'
}
else if (parseInt(month) === 08) {
    month = 'August'
}
else if (parseInt(month) === 09) {
    month = 'September'
}
else if (parseInt(month) === 10) {
    month = 'October'
}
else if (parseInt(month) === 11) {
    month = 'November'
}
else if (parseInt(month) === 12) {
    month = 'December'
}

// console.log(year);
// console.log(month);
// console.log(date);
// console.log (today);







