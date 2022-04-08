import Dashboard from "./views/Dashboard.js";
import KolkoKrzyzyk from "./views/KolkoKrzyzyk.js";
import Pizzeria from "./views/Pizzeria.js";
import OMnie from "./views/OMnie.js";
import Projekty from "./views/Projekty.js";
import Kontakt from "./views/Kontakt.js";

//special function which prevent of refreshing page afret clicking href
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: "/", view: Dashboard }, //if we go to path "/", we will call this function view
        { path: "/kolkokrzyzyk", view: KolkoKrzyzyk},
        { path: "/pizzeria", view: Pizzeria},
        { path: "/omnie", view: OMnie},
        { path: "/projekty", view: Projekty},
        { path: "/kontakt", view: Kontakt},
    ];


    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);

    //not found root
    if(!match){
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    //creating new instance
    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();

};

// this adding possibility to go back to history
window.addEventListener("popstate", router);


document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) { //find if clicked object have data-link
            e.preventDefault(); //stopping default behavior 
            navigateTo(e.target.href); //call a function 
        }
    })

    router();
});