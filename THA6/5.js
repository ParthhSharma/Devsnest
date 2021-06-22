// Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. 
// Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. 
// Try To Attempt : Difficult Level Increased 

var r = window.prompt("Enter Radius");
var h = window.prompt("Enter Height");

function Cylinder(radius,height){
    this.radius = radius; 
    this.height = height;
    this.vol = Math.PI*height*radius*radius;
}
var cyl = new Cylinder(r,h);
console.log("The volume is => "+cyl.vol.toFixed(4));