        // 1-Create a base class Shape with a method calcArea().
        // 2-Create subclasses Rectangle and Circle, and override the calcArea() method in each.
        // 3-Create an array of different shapes (both rectangles and circles).
        // 4-Loop through the array and calculate the area  shapes.

        class Shape {
            calcArea() {
                return 0;
            }
        }
        class Rectangle extends Shape {
            constructor(width, height) {
                super();
                this.width = width;
                this.height = height;
            }
            calcArea() {
                return this.width * this.height;
            }
        }

        class Circle extends Shape {
            constructor(radius) {
                super();
                this.radius = radius;
            }

            calcArea() {
                return (Math.PI * this.radius * this.radius);
            }
        }
        let shapes = [
            new Rectangle(5, 10),
            new Rectangle(7, 14),
            new Rectangle(4, 8),
            new Circle(7),
            new Circle(8),
            new Circle(3),
            new Circle(2)
        ];
        shapes.forEach(shape => {
            console.log(`Area = ${shape.calcArea()}`);
        });

