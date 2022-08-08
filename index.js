// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    if (pickup > 42){
        return pickup - 42}
        else(pickup < 42 )
            return 42 - pickup
        
}

function distanceFromHqInFeet(pickup){
    return distanceFromHqInBlocks(pickup) * 264
}

function distanceTravelledInFeet(start, destination){
    let total = destination - start
    
    if (total >= 0 ){
        return total * 264
    }
    else(total < 0)
    return - total * 264
}

function calculatesFarePrice (start, destination){
    let farePrice = distanceTravelledInFeet(start, destination);
    if (farePrice <= 400){
        return 0
    }
    else if (farePrice <= 2000){
        return (farePrice - 400) * 0.02
    }
    else if (farePrice <= 2500){
        return 25
    }
    else (farePrice >= 2500)
    return "cannot travel that far"

}
    