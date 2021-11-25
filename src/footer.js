function footer(){
    let homePage = document.getElementById("content");
    let footer = document.createElement("footer");
    footer.innerHTML = `    
    <h3>Barnacle Jones 2021 - <a href="https://github.com/BarnacleJones/restaurantPage">Github</a></h3>
     `
     footer.setAttribute("id", "footer")
    homePage.appendChild(footer);
}

export {footer}