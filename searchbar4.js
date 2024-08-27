function search_website4() {
    let input = document.getElementById('searchbar4').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('eclasspages');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}