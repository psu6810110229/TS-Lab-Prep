[cite_start]// 1. Define the Contract (Slide 15) [cite: 103-105]
interface Shape {
    getArea(): number;
}

[cite_start]// 2. Implement Circle (Slide 15) [cite: 106-113]
class Circle implements Shape {
    constructor(public r: number) { } // TypeScript shorthand for this.r = r
    getArea = () => Math.PI * this.r * this.r;
}

[cite_start]// 3. Implement Rectangle (Slide 15) [cite: 114-123]
class Rectangle implements Shape {
    constructor(public w: number, public h: number) { }
    getArea = () => this.w * this.h;
}

[cite_start]// 4. Calculate Total Area using Reduce (Slide 16) [cite: 125-135]
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