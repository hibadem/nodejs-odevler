// Area of Circle
const circleArea = (radius) => {
    return Math.PI * radius * radius; 
}
// Circumference of Circle
const circleCircumference = (radius) => {
    return Math.PI * radius * 2
}


//Export 
module.exports = {
    circleArea,
    circleCircumference
}
