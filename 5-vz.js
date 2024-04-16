class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  const circle1 = new Circle(5);
  console.log("Yuzasi:", circle1.getArea());
  console.log("Perimetri:", circle1.getPerimeter());
  
  const circle2 = new Circle(10);
  console.log("Yuzasi:", circle2.getArea());
  console.log("Perimetri:", circle2.getPerimeter());
  