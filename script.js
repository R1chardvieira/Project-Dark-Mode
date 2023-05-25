let btnElement=document.getElementsByClassName("btnon-off");
let bodyElement=document.querySelector("body");
let containerElement=document.querySelector(".container");
let notificationElement=document.querySelector(".notificationbar");
let toolsElement=document.querySelector(".toolsbar");
let userElement= document.querySelector(".userview");
let img1=document.getElementById("1");
let img2=document.getElementById("2");
let img3=document.getElementById("3");
let img4=document.getElementById("4");
let img5=document.getElementById("5");
let img6=document.getElementById("6");
let h2dm=document.getElementById("dm");
    
function toggleButton() {
    let button = document.getElementById("toggleButton");
    
    if (button.classList.contains("active")) {
      button.classList.remove("active");
      button.classList.add("inactive");
      button.innerHTML="OFF";
      bodyElement.setAttribute("style","background-color:#303134");
      containerElement.setAttribute("style","background-color:#121212; color:#DADADA");
      toolsElement.setAttribute("style","background-color:#303134; color:#DADADA");
      img1.src="./assets/icons8-conexão-média-16-branco.png";
      img2.src="./assets/icons8-wi-fi-16-branco.png";
      img3.src="./assets/icons8-bateria-pela-metade-16.png";
      img4.src="./assets/icons8-esquerda-32-branco-curta.png";
      img5.src="./assets/icons8-pesquisar-32-branco.png";
      img6.src="./assets/icons8-menu-2-32-branco.png";
      h2dm.setAttribute("style","color: #DADADA");
      btnElement.setAttribute("style","background-color:#303134");
    } else {
      button.classList.remove("inactive");
      button.classList.add("active");
      button.innerHTML="ON";
      bodyElement.removeAttribute("style");
      containerElement.removeAttribute("style");
      toolsElement.removeAttribute("style");
      img1.src="./assets/icons8-conexão-média-16.png";
      img2.src="./assets/icons8-wi-fi-16-preta.png";
      img3.src="./assets/icons8-bateria-pela-metade-16-preta.png";
      img4.src="./assets/icons8-esquerda-32-preto-curta.png";
      img5.src="./assets/icons8-pesquisar-32-preta.png";
      img6.src="./assets/icons8-menu-2-32-preta.png";
      h2dm.removeAttribute("style");
      btnElement.removeAttribute("style");
    }
}
btnElement.addEventListener("click",darkmode);