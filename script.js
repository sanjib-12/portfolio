function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    console.log(menu)
}

function getTimeOfDay() {
    const currentHour = new Date().getHours();

    let timeOfDay;

    if (currentHour >= 5 && currentHour < 12) {
        timeOfDay = 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 17) {
        timeOfDay = 'Good Afternoon';
    } else if (currentHour >= 17 && currentHour < 20) {
        timeOfDay = 'Good Evening';
    } else {
        timeOfDay = 'Hello';
    }

    return timeOfDay;
}

document.getElementById('greeting').textContent =  getTimeOfDay();

