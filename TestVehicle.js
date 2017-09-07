const Vehicle = require('./Vehicle.js');

function main(){
    //make two vehicles and take them for a spin.
    var prius = new Vehicle(4,20,30);
    prius.drive(0.4);
    console.log(prius.fuelLeft());;
    prius.fill(0.5)


    var ferrari = new Vehicle(8,25,15)
    ferrari.drive(10);
    console.log(ferrari.fuelLeft());
    ferrari.fill(0.6);


}
//run the main method
main();
