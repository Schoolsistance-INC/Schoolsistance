function search(search) {
    let input = document.getElementById(search).value
    input=input.toLowerCase();
    let x = document.getElementsByClassName(search);
    for (i = 0; i < x.length; i++) {
        if (x[i].innerText.toLowerCase().includes(input)) {
            x[i].style.display="list-item";
        } else {
            x[i].style.display="none";                 
        }
    }
}
