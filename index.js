//Solution 1
function distanceFromHqInBlocks (pickUp){
    const hq = 42;
    const blocks = Math.abs(hq  - pickUp);
    return blocks;
}

//Solution 2
function distanceFromHqInFeet(pickUp) {
    return distanceFromHqInBlocks(pickUp) *264;
}

//Solution 3
function distanceTravelledInFeet(start, destination){
    return Math.abs(start - destination) * 264;
}

//Solution 4
function calculatesFarePrice(start, destination){
    const chargable = distanceTravelledInFeet(start, destination);
    
    if (chargable <= 400)  {
        return 0;   

    }else if(chargable > 400 && chargable <= 2000){
        return (chargable - 400) * 0.02;

    } else if(chargable > 2000 && chargable <=2500) {
        return 25;

    } else {
        return "cannot travel that far";
    }
}
