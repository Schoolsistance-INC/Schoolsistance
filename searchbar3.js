function search_website3() {
    let input = document.getElementById('searchbar3').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('wiki');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}