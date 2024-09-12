function calc1(){
    let x = parseInt(document.getElementById("mole").value);
    let y = parseInt(document.getElementById("gram").value);
    let mass = parseInt(document.getElementById("molar").value);
    let FU = parseInt(document.getElementById("molecule").value);
    let a = parseInt(document.getElementById("one").value);
    let a2 = parseInt(document.getElementById("one2").value);
    let a3 = a * a2;
    let b = parseInt(document.getElementById("two").value);
    let b2 = parseInt(document.getElementById("two2").value);
    let b3 = b * b2;
    let c = parseInt(document.getElementById("three").value);
    let c2 = parseInt(document.getElementById("three2").value);
    let c3 = c * c2;
    let d = parseInt(document.getElementById("four").value);
    let d2 = parseInt(document.getElementById("four2").value);
    let d3 = d * d2;
    let mass2 = a3 + b3 + c3 + d3;
    let a4 = (a3/mass2) * 100;
    let b4 = (b3/mass2) * 100;
    let c4 = (c3/mass2) * 100;
    let d4 = (d3/mass2) * 100;
    let avo = (6.022 * 10**23);
        if (x){
            document.getElementById("trest").innerHTML = x;
        } else if (y && !x && mass) {
            document.getElementById("trest").innerHTML = y / mass;
        } else if (FU && !x){
            document.getElementById("trest").innerHTML = FU / avo
        } else if (!y && !x && !FU) {
            document.getElementById("trest").innerHTML = "Undefined";
        }
        if (mass){
        document.getElementById("output3").innerHTML = mass + "g";
        } else {
        document.getElementById("output3").innerHTML = "Undefined";
        }
        if (FU){
            document.getElementById("output2").innerHTML = FU;
        } else if (!FU && x) {
            document.getElementById("output2").innerHTML = x * avo;
        } else if (!FU && y && mass){
            document.getElementById("output2").innerHTML = (y/mass) * avo
        } else if (!y && !x && !FU) {
            document.getElementById("output2").innerHTML = "Undefined";
        }
        if (y){
            document.getElementById("output").innerHTML = y;
        } else if (!y && x && mass) {
            document.getElementById("output").innerHTML = x * mass;
        } else if (!y && FU && mass){
            document.getElementById("output").innerHTML = (FU/avo) * mass
        } else if (!y && !x && !FU) {
            document.getElementById("output").innerHTML = "Undefined";
        }
        if (a4){
            document.getElementById("output4").innerHTML = a4+"%";
        } else {
            document.getElementById("output4").innerHTML = "Undefined";
        }
        if (b4){
            document.getElementById("output5").innerHTML = b4+"%";
        } else {
            document.getElementById("output5").innerHTML = "Undefined";
        }
        if (c4){
            document.getElementById("output6").innerHTML = c4 + "%";
        } else {
            document.getElementById("output6").innerHTML = "Undefined";
        }
        if (d4){
            document.getElementById("output7").innerHTML = d4 + "%";
        } else {
            document.getElementById("output7").innerHTML = "Undefined";
        }
         document.getElementById("output8").innerHTML = mass2 + "g";
}


function calc2(){
    let a = parseInt(document.getElementById("side1").value);
    let b = parseInt(document.getElementById("side2").value);
    let c = parseInt(document.getElementById("side3").value);
    let p = parseInt(document.getElementById("perim").value);
    let s = (a + b + c)/2;
    let area = undefined;
    if (p){
        s = p/2;
        area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
        document.getElementById("output12").innerHTML = area;
    } else if (!p){
        s = (a + b + c)/2;
        area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
        document.getElementById("output12").innerHTML = area;
    } 
    if (!p && !a && !b && !c) {
        document.getElementById("output12").innerHTML = "undefined"
        document.getElementById("output22").innerHTML = "undefined"
    }
    if (p) {
    document.getElementById("output22").innerHTML = p;
    } else if (!p && s){
        document.getElementById("output22").innerHTML = s*2;
    }
}

function calc3(){
    let m = parseInt(document.getElementById("hmass").value);
    let h = parseInt(document.getElementById("heat-s").value);
    let tc = parseInt(document.getElementById("tchange").value);
    let it = parseInt(document.getElementById("temp1").value);
    let ft = parseInt(document.getElementById("temp2").value);
    let im = parseFloat(document.getElementById("imass").value);
    let fm = parseFloat(document.getElementById("fmass").value);
    let cal1 = m*h*tc;
    let bt = ft-it;
    if (m && h && !tc && bt){
        cal1 = m*h*bt;
    }
    let Cal = cal1/1000
    let cm = im - fm
    let ec = Cal/cm;
    if (cal1){
        document.getElementById("output32").innerHTML = cal1 + "cal"
        document.getElementById("output33").innerHTML = Cal + "Cal"
        document.getElementById("output34").innerHTML = cal1*4.184 + "j"
    } else if (!cal1){
        document.getElementById("output32").innerHTML = "undefined"
        document.getElementById("output33").innerHTML = "undefined"
        document.getElementById("output34").innerHTML = "undefined"
    }
    if (m){
        document.getElementById("output31").innerHTML = m + "g"
    } else if (!m){
        document.getElementById("output31").innerHTML = "undefined"
    }
    if (tc || tc == 0){
        if (tc > 0){
        document.getElementById("output36").innerHTML = "+" + tc+"&deg" + "C";
        } else if (tc < 0){
            document.getElementById("output36").innerHTML = tc+"&deg" + "C";
        } else if (tc == 0){
            document.getElementById("output36").innerHTML = "0"+"&deg" + "C";
        }
    } else if (!tc && bt ||!tc && bt == 0){
        if (bt > 0){
        document.getElementById("output36").innerHTML = "+" + bt+"&deg" + "C";
        } else if (bt < 0){
            document.getElementById("output36").innerHTML = bt;+"&deg" + "C";
        } else if(bt == 0){
            document.getElementById("output36").innerHTML = "0"+"&deg" + "C";
        }
    } else if (!tc && !bt){
        document.getElementById("output36").innerHTML = "undefined"
    }
    if (h){
        document.getElementById("output35").innerHTML = h
    } else if (!h){
        document.getElementById("output35").innerHTML = "undefined"
    }
        document.getElementById("output37").innerHTML = Math.round(ec);
}