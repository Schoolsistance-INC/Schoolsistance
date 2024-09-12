function calc1(){
    let x = parseInt(document.getElementById("mole").value);
    let y = parseInt(document.getElementById("gram").value);
    let mass = parseInt(document.getElementById("molar").value);
    let FU = parseInt(document.getElementById("molecules").value);
        
        if (x){
            document.getElementById("output1").innerHTML = x;
        } 
        else if (y && !x){
            document.getElementById("output1").innerHTML = "test";
        }
}