var btn = document.getElementById('menu-button');
var closeBtn = document.getElementById('close-menu');
var menu = document.getElementById('navbar');

 function showMenu() {
     if (btn.style.display === "none") {
         btn.style.display = "block";
     } else {
         btn.style.display = "none";
         menu.style.display = "block";
         closeBtn.style.display = "block";
     }
 }

 function hideMenu() {
     if (closeBtn.style.display === "none") {
         closeBtn.style.display = "block";
     } else {
         btn.style.display = "block";
         menu.style.display = "none";
         closeBtn.style.display = "none";
     }
 }