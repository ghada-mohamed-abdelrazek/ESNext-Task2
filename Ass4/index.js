// create class veichle (name, speed, color) and sub classes like bike ,car enable function in sub classes name it move while calling it car,bike move to right if car or bike  arrived to right of page it turn to left each of them moved by its speed .
class Vehicle {
    constructor(name, speed, color, element) {
        this.name = name;
        this.speed = speed;
        this.color = color;
        this.element = element;
        this.position = 0;
        this.directionRight = true;
    }

    move() {
        let roadWidth = document.getElementById("road").offsetWidth;
        let boxWidth = this.element.offsetWidth;

        if (this.directionRight) {
            this.position += this.speed;
            if (this.position + boxWidth >= roadWidth) {
                this.directionRight = false; 
            }
        } else {
            this.position -= this.speed;
            if (this.position <= 0) {
                this.directionRight = true;
            }
        }

        this.element.style.left = this.position + "px";
    }
}

class Car extends Vehicle {}
class Bike extends Vehicle {}

let car = new Car("Car", 5, "red", document.getElementById("car"));
let bike = new Bike("Bike", 4, "blue", document.getElementById("bike"));

let interval;
document.getElementById("startBtn").onclick = function () {
    if (!interval) {
        interval = setInterval(() => {
            car.move();
            bike.move();
        }, 10);
    }
};

document.getElementById("stopBtn").onclick = function () {
    clearInterval(interval);
    interval = null;
};