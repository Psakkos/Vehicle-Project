# Vehicle Module

Our goal is to create a vehicle-module which has 5 instance variables and shares a few functions with the outer score.

### Private Instance variables
-  engine (could be 4, 6, or 8)
-  fuel (represents the percent of fuel left in the gastank)
-  gastank (represents the total capacity of the gastank)
-  averageMPG (theoretical/ advertised miles per gallon)
-  milesDriven (the total amount of miles driven on the car)

### Public Functions
-  Getter functions
    -  totalMiles();
    -  fuelLeft();
-  Setter functions
    -  fill() takes one parameter named percent which is a decimal in between 0 and 1.  Add the percent to the fuel instance-variable.  Stop the function from going over 100% full by using conditional statements.  I recommend making a local-variable to aide in your calculations.
    -  drive() takes one parameter named hours which represents how long you drove the car in a continuous path.  This functions should decrease the fuel and increase the milesDriven instance-variables simultaneously.  Also build in a conditional statement which stops the car from driving past its fuel limit.  We DO NOT have infinite fuel.
### Private Functions
-  engineEfficiency()
    -  does not accept any parameters
    -  will conditionally return 1, 1.20 or 1.36 based on the engine instance-variable specified above respectfully.
    -  if none of the 3 options are available, return null and log an error statement.

### Reminder
Make sure in addition to declaring and defining these functions inside of the module, that you add a return statement with each function name separated by commas, without the parentheses.

# TestVehicle file
In a second file named Test Vehicle (no spaces), create two different vehicles, execute their public functions, and show that they meet expectations.
