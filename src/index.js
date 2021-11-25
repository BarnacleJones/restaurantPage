import { renderAbout } from './about';
import { renderHeader } from './header';
import{renderMain} from './mainpage';
import{renderMenu} from './menu';
import{footer} from './footer';


renderHeader();
renderMain();
footer();


//event listners for navigation
document.addEventListener("click", (e) => {
    const target = e.target.innerText;
    if (target === "Home") renderMain();
    if (target === "Menu" ) renderMenu();
    if (target === "About") renderAbout();

})