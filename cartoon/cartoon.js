// cartoon.js

// Get canvas and context
const canvas = document.getElementById("cartoonCanvas");
const ctx = canvas.getContext("2d");



// Background Sky
ctx.fillStyle = "#87CEEB";
ctx.fillRect(0, 0, canvas.width, canvas.height);


// Ground
ctx.fillStyle = "#4CAF50";
ctx.fillRect(0, 450, canvas.width, 150);


// Sun
ctx.beginPath();
ctx.arc(120, 100, 60, 0, Math.PI * 2);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.stroke();


// Caption Text
ctx.font = "32px Arial";
ctx.fillStyle = "black";
ctx.fillText("Welcome to My Cartoon House!", 220, 50);


// House Base
ctx.fillStyle = "#D2691E";
ctx.fillRect(300, 250, 300, 200);
ctx.strokeRect(300, 250, 300, 200);


// Roof
ctx.beginPath();
ctx.moveTo(270, 250);
ctx.lineTo(450, 130);
ctx.lineTo(630, 250);
ctx.closePath();

ctx.fillStyle = "#8B0000";
ctx.fill();
ctx.stroke();


// Door
ctx.fillStyle = "#654321";
ctx.fillRect(420, 340, 60, 110);
ctx.strokeRect(420, 340, 60, 110);


// Door knob
ctx.beginPath();
ctx.arc(468, 395, 4, 0, Math.PI * 2);
ctx.fillStyle = "gold";
ctx.fill();


// Left Window
ctx.fillStyle = "#ADD8E6";
ctx.fillRect(340, 300, 70, 70);
ctx.strokeRect(340, 300, 70, 70);

// Window lines
ctx.beginPath();
ctx.moveTo(375, 300);
ctx.lineTo(375, 370);

ctx.moveTo(340, 335);
ctx.lineTo(410, 335);
ctx.stroke();


// Right Window
ctx.fillStyle = "#ADD8E6";
ctx.fillRect(490, 300, 70, 70);
ctx.strokeRect(490, 300, 70, 70);

// Window lines
ctx.beginPath();
ctx.moveTo(525, 300);
ctx.lineTo(525, 370);

ctx.moveTo(490, 335);
ctx.lineTo(560, 335);
ctx.stroke();


// Fence using FOR LOOP
ctx.fillStyle = "#DEB887";

for (let i = 0; i < 15; i++) {

    ctx.save();

    // Move fence posts
    ctx.translate(40 + i * 60, 420);

    // Fence post
    ctx.fillRect(0, 0, 20, 70);

    // Fence top triangle
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(10, -15);
    ctx.lineTo(20, 0);
    ctx.fill();

    ctx.restore();
}


