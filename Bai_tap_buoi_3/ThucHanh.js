function thuc_hanh() {
let width = parseInt(prompt("Enter the width"));
let height = parseInt(prompt("Enter the height"));
let area = width*height;

document.write("The area is: " + area)
}

function hinh_tron() {
    let r = parseInt(prompt("Bán kính đường tròn"));
    let perimeter = 2*r*3.14;
    let area = Math.pow ( r, 2) * 3.14;
   
    alert("Chu vi hình tròn: " + perimeter);
    alert("Diện tích hình tròn: " + area);
}