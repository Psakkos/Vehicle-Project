const Vehicle = require('./Vehicle.js');

function main(){
    //make two vehicles and take them for a spin.
    var hotrod = new Vehicle(8,20,30);

    hotrod.drive(10);
    hotrod.fuelLeft();
    hotrod.fill(0.5)





}
//run the main method
main();
