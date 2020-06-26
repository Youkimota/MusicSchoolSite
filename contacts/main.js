document.getElementById("burger-menu").onclick = function(){
  document.getElementById("burger-menu").style.display="none"
  document.getElementById("burger-menu-close").style.display="block"
  document.getElementById("menu-button1").style.display="block"
  document.getElementById("menu-button2").style.display="block"
  document.getElementById("menu-button3").style.display="block"
  document.getElementById("menu-button4").style.display="block"
  document.getElementById("menu-button5").style.display="block"
  document.getElementById("menu-button6").style.display="block"
}
document.getElementById("burger-menu-close").onclick = function(){
  document.getElementById("burger-menu").style.display="block"
  document.getElementById("burger-menu-close").style.display="none"
  document.getElementById("menu-button1").style.display="none"
  document.getElementById("menu-button2").style.display="none"
  document.getElementById("menu-button3").style.display="none"
  document.getElementById("menu-button4").style.display="none"
  document.getElementById("menu-button5").style.display="none"
  document.getElementById("menu-button6").style.display="none"
}