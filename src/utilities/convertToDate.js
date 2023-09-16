const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  
export const getDate = (givenDate) =>{
    const newDate = new Date(givenDate);

    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();

    let meridiem = "AM";
    if(hours >= 12){
        if(hours > 12) hours -= 12;
        meridiem = "PM";
    }
    if(hours == 0) hours = "12";
    if(hours < 10) hours = "0" + hours;
    if(minutes < 10) minutes = "0" + minutes;

    let day = days[newDate.getDay()];
    let date = newDate.getDate();

    return {hours, minutes, meridiem, day, date};
}