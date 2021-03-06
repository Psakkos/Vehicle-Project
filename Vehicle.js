var Vehicle= function(e,gt,mpg){
    //work in here
    let engine= e;
    let fuel= 1;
    let gastank=gt;
    let avgMPG=mpg;
    let milesDriven=0;

    //getters
    function totalMiles(){
        return milesDriven;
    }
    function fuelLeft(){
        return fuel;
    }

    //Setter
 function fill(percent){
     fuel += percent;
     if (fuel>1){
         fuel=1;
     }
 }
function drive(hour){
    let fuelconsumed= hour*engineEfficiency();
    if (fuelconsumed<=fuel){
        milesDriven+=avgMPG*hour;
        fuel-=fuelconsumed;
    }
    else if(fuelconsumed>fuel){
        milesDriven+=avgMPG*fuel;
        fuel=0
    }
}
 function engineEfficiency(){
     if(engine== 4){
         return 1;
     }
     else if (engine == 6){
         return 1.2;
     }
    else if (engine== 8) {
        return 1.5;
    }
    else {
        return null;
    }
 }

    return{drive,fill,totalMiles,fuelLeft}

};
module.exports=Vehicle
