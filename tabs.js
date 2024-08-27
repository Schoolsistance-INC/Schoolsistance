function openCity(evt, tabname) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabname).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
function tab(evt, tabname,tabcontents,tablink) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName(tabcontents);
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName(tablink);
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabname).style.display = "block";
  evt.currentTarget.className += " active";
}

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