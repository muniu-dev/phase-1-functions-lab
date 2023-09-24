const hq = 42;

function distanceFromHqInBlocks (pickUp){
    if(pickUp>=42){
        return pickUp - hq;
    }else{
        return hq - pickUp;
    }
    
}

function distanceFromHqInFeet(){
    return distanceFromHqInBlocks(50) * 264;
    
}

function distanceTravelledInFeet(start, destination){
    if(start>=destination){
        return (start - destination)*264;
    }else{
        return (destination-start)*264;
    }
}

function calculatesFarePrice(start, destination){

    if (distanceTravelledInFeet() <= 400){
        return distanceTravelledInFeet() * 0;

    }else if (distanceTravelledInFeet() > 400 && distanceTravelledInFeet() <= 2000){
        return distanceTravelledInFeet() * 0.2;

    }else if(distanceTravelledInFeet() > 2000 && distanceTravelledInFeet() <= 2500 ){
        return 25;

    }else{
        return "cannot travel that far";
    }
}

