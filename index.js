// code your solution here
superbowlWin = (record) => {
    const result = record.find(winFinder);
    // if(result === undefined){
    //     return undefined;
    // }
    // return result.year;
    return result ? result.year : undefined;
}

function winFinder(object){
    if(object.result === "W"){
        return true;
    }
    else{
        return false;
    }
}