
import './styles/style.scss';
import Dashboard from "./views/Dashboard.js";
import Profile from "./views/Profile.js";
import About from "./views/About.js";


/**
 *  If link is clicked navigate to route
 */
const navigateTo = url => {
  history.pushState(null, null, url); //push url to history api
  router();
};

const router = async () => {  //async because contents will be loaded from other files
  const routes = [
      { path: "/", view: Dashboard },
      { path: "/about", view: About },
      { path: "/profile", view: Profile }
  ];

  //map all route matches
  const potentialMatches = routes.map(route => {
    return {
        route,
        isMatch: location.pathname === route.path
    };
  });

  console.log('location :>> ', location);

  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

  console.log('match :>> ', match);
  /* Route not found - return first route OR a specific "not-found" route */
  if (!match) {
      match = {
          route: routes[0],
          result: [location.pathname]
      };
  }

  // create instance of matched view
  const view = new match.route.view();

  console.log('view :>> ', view);
  // append view html to the app element
  document.querySelector("#app").innerHTML = await view.getHtml();
}

window.addEventListener("popstate", router);  //re-run router if navigating through history api

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", e => {
    console.log("refresh");
      if (e.target.matches("[data-link]")) {
          e.preventDefault(); // dont refresh page
          navigateTo(e.target.href); // instead call navigateTo
      }
  });

  /* Document has loaded -  run the router! */
  router();
});