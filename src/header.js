function renderHeader(){
    
    let homePage = document.getElementById("content");
    let header = document.createElement("header");
    header.innerHTML = `    
    <h1>Home</h1>
    <h1>Menu</h1>
    <h1>About</h1>
     `
     header.setAttribute("id", "header")
    homePage.appendChild(header);
      

}

export{renderHeader}