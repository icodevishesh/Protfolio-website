function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

let icon = document.getElementById('theme-icon');
function toggleTheme(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src = "assets/sun.png";
  }else{
    icon.src ="assets/moon.png";
  }
}

