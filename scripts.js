/*
    Code sample for SITE 1101 Principles of Information Systems 
    (c)2024 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    
*/

// Global variables for Artist's position and orientation
var x, y;
var angle;

function radian(degree) {
    return degree * Math.PI / 180;
}

function moveForward(distance, context) {
    let a = radian(angle);
    x = x + distance * Math.cos(a);
    y = y + distance * Math.sin(a);
    context.lineTo(x, y);    
}

function turnRight(degree) {
    angle = angle - degree;
    if (angle < 0) angle = angle + 360;
}

function turnLeft(degree) {
    angle = angle + degree;
    if (angle > 360) angle = angle - 360;
}

function DrawSpiral(context) {
    // Inspired by Express Course (2024) Lesson 29: For Loops with Artist
    // https://studio.code.org/s/express-2024/lessons/29/levels/5

    // The initial position is in the center of the canvas
    x = context.canvas.width / 2;
    y = context.canvas.height / 2;
    // The initial orientation is zero degrees i.e. facing East
    angle = 0.0; 
    context.moveTo(x, y);
    context.beginPath();
    for (let counter = 3; counter < 600; counter += 3) {
        moveForward(counter, context);
        context.stroke();
        turnRight(89);
    }
}



document.getElementById("menu-link").addEventListener("click", function() {
    this.classList.add("active-animation");  // Добавляем класс с анимацией
    setTimeout(() => {
        this.classList.remove("active-animation");  // Убираем класс через 1 секунду
    }, 1000);
});



document.addEventListener('DOMContentLoaded', function() {
    const profileLink = document.getElementById('profileLink');
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.innerHTML = profileLink.getAttribute('title');
    
  
    document.body.appendChild(tooltip);

    
    profileLink.addEventListener('mouseenter', function() {
        tooltip.style.display = 'block';
        const rect = profileLink.getBoundingClientRect();
        tooltip.style.left = rect.left + window.scrollX + 'px';
        tooltip.style.top = rect.bottom + window.scrollY + 'px';
    });

    
    profileLink.addEventListener('mouseleave', function() {
        tooltip.style.display = 'none';
    });
});
