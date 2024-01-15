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

const canvas = document.getElementById('skillsCanvas');
const ctx = canvas.getContext('2d');
const skills = ['Python', 'C', 'C++', 'JavaScript', 'CSS'];
const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const skillCircles = skills.map((skill, index) => {
  return {
    skill,
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: 30,
    color: colors[index % colors.length],
    speedX: (Math.random() - 0.5) * 2,
    speedY: (Math.random() - 0.5) * 2
  };
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  skillCircles.forEach(circle => {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = circle.color;
    ctx.fill();
    ctx.closePath();

    circle.x += circle.speedX;
    circle.y += circle.speedY;

    if (circle.x - circle.radius < 0 || circle.x + circle.radius > canvas.width) {
      circle.speedX = -circle.speedX;
    }

    if (circle.y - circle.radius < 0 || circle.y + circle.radius > canvas.height) {
      circle.speedY = -circle.speedY;
    }
  });

  requestAnimationFrame(draw);
}

draw();