import { renderHeader } from './header';
import{footer} from './footer';

function renderAbout(){
    let homePage = document.getElementById("content");
    homePage.innerHTML = "";
    renderHeader()   
    
    let mainpage = document.createElement("div");
    mainpage.innerHTML = `    
    <br><br><br>
    <h1>About us</h1>
    <br>
    <div id="aboutdiv">
    <h2>Locally crafted</h2>
    <h2>Locally sourced</h2>
    <h2>Locally loved</h2>
    <h2>123 Cookie Blvd</h2>
    <h2>Auckland, New Zealand</h2>
    </div>
    `
    homePage.appendChild(mainpage);
    mainpage.setAttribute("id", "mainpage")

    footer(); 
}

export{renderAbout}