import { renderHeader } from './header';
import{footer} from './footer';
function renderMain(){

        
        let homePage = document.getElementById("content");
        homePage.innerHTML = "";
        renderHeader()
        
        let mainpage = document.createElement("div");
        mainpage.innerHTML = `     
        
        <h1>Cinnamon's cookies</h1>
        
        <br>
        <h2>Simply the best cookies around!</h2>
        <h2>Delicious decadence.</h2>

        <h1 id="menulink">Menu</h1>
          `
        homePage.appendChild(mainpage);
        mainpage.setAttribute("id", "mainpage")
        
        footer();
  
}

export{renderMain}