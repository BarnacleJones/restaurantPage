import { renderHeader } from './header';
import{footer} from './footer';

function renderMenu(){
    let homePage = document.getElementById("content");
    homePage.innerHTML = "";
    renderHeader()
    
    let mainpage = document.createElement("div");
    mainpage.innerHTML = `    
    <br><br><br>
    <h1>Menu</h1>
    <br>
    <h2>Classic Chocolate</h2>
    <h3>Chocolate chips, hot from the oven</h3>
    <br>
    <h2>Classic Oat</h2>
    <h3>Chocolate chips, oat, made fresh every day</h3>
    <br>
    <h2>Cinnamon's special</h2>
    <h3>White chocolate and coffee beans, one of a kind</h3>
    `
    homePage.appendChild(mainpage);
    mainpage.setAttribute("id", "mainpage")
   
    footer(); 
}

export{renderMenu}