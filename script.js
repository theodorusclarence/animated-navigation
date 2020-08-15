const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
navItems = [nav1, nav2, nav3, nav4, nav5];

function navAnimateHelper(code) {
    // to count from 1 to 5 for the class
    let count = 1;
    navItems.forEach((element) => {
        if (code === "in") {
            element.classList.remove(`slide-out-${count}`);
            element.classList.add(`slide-in-${count}`);
        } else if (code === "out") {
            element.classList.remove(`slide-in-${count}`);
            element.classList.add(`slide-out-${count}`);
        }
        count++;
    });
    count = 1;
}

function toggleNav() {
    // toggle menu bars open/closed
    menuBars.classList.toggle("change");
    // Toggle menu active
    overlay.classList.toggle("overlay-active");

    if (overlay.classList.contains("overlay-active")) {
        // Animate in overlay
        overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
        //Animate in - nav items
        navAnimateHelper("in");
    } else {
        // Animate out overlay
        overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
        //Animate out - nav items
        navAnimateHelper("out");
    }
}

// Event Listeners
menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav) => nav.addEventListener("click", toggleNav));
