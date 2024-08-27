function math(){
    document.getElementById("mathlink").click();
}
function la(){
    document.getElementById("lalink").click();
}
function science(){
    document.getElementById("sciencelink").click();
}
function ss(){
    document.getElementById("sslink").click();
}
function clicktest(){
    document.getElementById("test").click();
}
function code(){
    document.getElementById("codelink").click();
}
function edu(){
    document.getElementById("edulink").click();
}
function rdcode(){
    document.getElementById("rdcdlink").click();
}
function togglenewtab(){
    let links = document.getElementsByTagName("a")
    if (document.getElementById("newtab?").style.color == "white"){
        for (let i = 0 ; i < links.length ; i++){
            links[i].setAttribute("target","_blank")
        }
        document.getElementById("newtab?").style.color = "black"
    } else if (document.getElementById("newtab?").style.color == "black"){
        for (let i = 0 ; i < links.length ; i++){
            links[i].setAttribute("target","_self")
        }
        document.getElementById("newtab?").style.color = "white"
    }
}
