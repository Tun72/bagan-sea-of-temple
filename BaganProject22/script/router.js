const route = (e) => {
    e = e || window.event;
    e.preventDefault();
    window.history.pushState({}, "", e.target.href);
    console.log("Hello");
}

const routes = {
 "/home.html" : "home.html",
 "/main.html/?home" : "main.html",

}

const handleLocation  = async () => {
    const path = window.location.pathname;
    console.log(path);
    const route = routes[path];
    console.log(route);
    const html = await fetch(route).then((data) => data.text());
    // document.getElementById("")
}

window.onpopstate = handleLocation;
window.route = route;
handleLocation();