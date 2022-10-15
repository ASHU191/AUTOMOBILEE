class Automobile {
    constructor(vehicleName, model, color, type) {
      this.vehicleName = vehicleName;
      this.model = model;
      this.color = color;
      this.type = type;
      this.start = function start() {
        console.log("Vehicle is ready to drive!");
      };
      this.openDoor = function openDoor() {
        console.log("Door has been opened!");
      };
    }
  }
  
  class Car extends Automobile {
    constructor(vehicleName, model, color, type, maxSpeed, doorProperties) {
      super(vehicleName, model, color, type);
      this.maxSpeed = maxSpeed;
      this.doorProperties = doorProperties;
    }
  }
  
  class Truck extends Automobile {
    constructor(vehicleName, model, color, type, maxSpeed, doorProperties) {
      super(vehicleName, model, color, type);
      this.maxSpeed = maxSpeed;
      this.doorProperties = doorProperties;
    }
  }
  
  class Bus extends Automobile {
    constructor(vehicleName, model, color, type, maxSpeed, doorProperties) {
      super(vehicleName, model, color, type);
      this.maxSpeed = maxSpeed;
      this.doorProperties = doorProperties;
    }
  }
  
  var car = new Car("Civic", "2012", "Black", "Manual", "120 km/h", "4 Doors");
  var truck = new Truck(
    "Betty",
    "2022",
    "White",
    "Manual",
    "100 km/h",
    "2 Doors"
  );
  var bus = new Bus(
    "Express Coach",
    "2019",
    "Green",
    "Automatic",
    "80 km/h",
    "2 Doors"
  );
  
  console.log(car);
  console.log(truck);
  console.log(bus);
  
  car.start();
  car.openDoor();

// ASHUxD