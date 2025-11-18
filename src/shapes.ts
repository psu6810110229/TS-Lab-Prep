interface Shape {
    getArea(): number;
}

class Circle implements Shape {
    constructor(public r: number) {}
    getArea = () => Math.PI * this.r * this.r;
}

class Rectangle implements Shape {
    constructor(public w: number, public h: number) {}
    getArea = () => this.w * this.h;
}

const shapes: Shape[] = [
    new Circle(2),
    new Rectangle(2, 3),
    new Rectangle(1, 5)
];

const totalArea = shapes.reduce(
    (total, currentShape) => total + currentShape.getArea(),
    0
);

console.log("Shape List:", shapes);
console.log("Total Area:", totalArea);
