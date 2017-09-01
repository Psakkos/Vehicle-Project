const Vehicle = require('./Vehicle.js');

function main(){
    //make two vehicles and take them for a spin.
    var prius = new Vehicle(8,20,30);
    prius.drive(10);
    prius.fuelLeft();
    prius.fill(0.5)


    var ferrari = new Vehicle(8,25,15)
    ferrari.drive(20);
    ferrari.fuelLeft();
    ferrari.fill(0.6);


}
//run the main method
main();
