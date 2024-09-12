function calc4(){
let x = parseInt(document.getElementById("input4-1").value)
let y = parseInt(document.getElementById("input4-2").value)
let z = "-" + y + "/" + x + "x"
if (x == 1){
    z = "-" + y + "x"
}
document.getElementById("output").innerHTML = z
}