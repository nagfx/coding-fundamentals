function calculateAge(date) {
    var formattedDate = date.split("/")
    var birthdateTimeStamp = new Date(formattedDate[2], formattedDate[1]-1, formattedDate[0])
    var currentDate = new Date().getTime();
    var difference = currentDate - birthdateTimeStamp;
    var currentAge = Math.floor(difference/31557600000)
    // dividing by 1000*60*60*24*365.25
    return currentAge
}
    

console.log(calculateAge("20/7/2002") === 19)
console.log(calculateAge("1/1/1979") === 43)