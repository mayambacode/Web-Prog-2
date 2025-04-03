class Circle {
    constructor(radius = 1) {
        this.radius = parseFloat(radius.toFixed(1));
    }

    get circumference() {
        return parseFloat((2 * Math.PI * this.radius).toFixed(2));
    }

    get area() {
        return parseFloat((Math.PI * Math.pow(this.radius, 2)).toFixed(2));
    }

    toString() {
        return `Circle: radius=${this.radius}`;
    }
}

module.exports = Circle;