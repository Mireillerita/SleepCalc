let day ;
let daysOfWeek = ["monday", "tuesday", "wensday", "thursday", "friday", "saturday", "sunday"];

function getSleepHours(day){
    
    if( day === "monday"){
        return 8;
    }
    else if(day === "tuesday"){
        return 7;
    }
    else if(day === "wensday"){
        return 6;
    }
    else if(day === "thursday"){
        return 5;
    }
    else if(day === "friday"){
        return 4;
    }
    else if(day === "sutrday"){
        return 9;
    }
    else{
        return 9;
    }

}

 console.log(getSleepHours('tuesday'));


function getActualSleepHours() {
    let totalSleepHours = 0;

    for (let i = 0; i < daysOfWeek.length; i++) {
        totalSleepHours += getSleepHours(daysOfWeek[i]);
    }

    return totalSleepHours;
}

console.log(getActualSleepHours());
let idealSleepHours = 7;

function getIdealSleepHours() {

    let idealHours = 9;
    return idealHours * daysOfWeek.length;
}

console.log(getIdealSleepHours());

function calculateSleepDebt(){
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours =  getIdealSleepHours(); 

    if (actualSleepHours === idealSleepHours){
        console.log("the user got" + (idealSleepHours - actualSleepHours)+ "the perfect amount of sleep.");
    }
    else if(actualSleepHours > idealSleepHours){
        console.log("the user got "+(idealSleepHours - actualSleepHours)+ "more sleep than needed.");
    }
    else{
        console.log(" user should get some rest." + (idealSleepHours - actualSleepHours) +' hour(s) less sleep than you needed this week. Get some rest.');
    }
}
calculateSleepDebt();





