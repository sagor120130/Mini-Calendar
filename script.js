const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dateName = document.getElementById("date-name");
const yearName = document.getElementById("year");

const date = new Date ();
const month = date.getMonth();
monthName.innerText = date.toLocaleString("en", {
    month:"long"
})
 
dayName.innerText = date.toLocaleString("en", {
    weekday:"long"
})

dateName.innerText = date.getDate()

yearName.innerText = date.getFullYear()