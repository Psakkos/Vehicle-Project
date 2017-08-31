var Vehicle= function(e,gt,mpg){
    //work in here
    let engine= e;
    let fuel= 1;
    let gastank=gt;
    let averageMPG=mpg;
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
     if (fuel>1) {
         fuel=1;
     }
 }
 function engineEfficiency(){
     if(engine== 4){
         return 1;
     }
     if (engine == 6){
         return 1.2;
     }
    if (engine== 8) {
        return 1.5;
    }
 }

    return{drive,fill,totalMiles,fuelLeft}

};
