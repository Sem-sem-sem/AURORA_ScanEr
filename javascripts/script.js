document.addEventListener("DOMContentLoaded", function () {
  
document.addEventListener('mousemove', (e) => {
    const elem = document.querySelector('.sect2_t3');
    if (e.clientX >= 300) {
        elem.style.color = 'green';
        elem.textContent = 'W1 0 – 0/0';
    } else {
        elem.style.color = 'white';
        elem.textContent = 'W1 15 – 34/23';
    }

  setInterval(() => {
      const elem = document.querySelector('.sect2_t1');
      elem.textContent = elem.textContent === 'ARCT' ? 'ASSS' : 'ARCT';
  }, 4000);

  setInterval(() => {
      const elem = document.querySelector('.sect1_t5');
      elem.textContent = elem.textContent === '1133' ? '3366' : '1133';
  }, 2000);

let counter = 0.4;
  setInterval(() => {
      const elem = document.querySelector('.sect3_t2');
      counter++;
      elem.textContent = `PGU${counter}`;
  }, 1000);
  setInterval(() => {
      counter *= 2;
      document.querySelector('.sect3_t2').textContent = `PGU${counter}`;
  }, 4000);

document.addEventListener('mousemove', (e) => {
      const elem1 = document.querySelector('.sect9_t4');
      const elem2 = document.querySelector('.sect9_t5');
      if (e.clientX < 300) {
          elem1.textContent = 'ALL.FnD PLOP';
          elem2.textContent = 'ALL.FnD CRS';
      } else {
          elem1.textContent = '-ANI PLOP';
          elem2.textContent = '-ANI CRS';
      }
  });

  document.addEventListener('mousemove', (e) => {
      const elem = document.querySelector('.sect9_t3');
      const value = Math.floor(e.clientX / 10);
      elem.textContent = `${String(value).padStart(2, '0')}.${String(e.clientX % 10)}`;
  });

  let numbers = [2.5, 2];
  setInterval(() => {
      const elem = document.querySelector('.sect9_t2');
      numbers = numbers.map(num => num * 1.5);
      elem.textContent = `${numbers[0].toFixed(1)} ${numbers[1].toFixed(1)}`;
  }, 1000);

  let value4_4 = 34.678;
  setInterval(() => {
      const elem = document.querySelector('.sect4_t4');
      value4_4 += 3;
      elem.textContent = `${value4_4}`;
  }, 1000);

  let value4_3 = 12.22;
  let isMoving = false;
  document.addEventListener('mousemove', (e) => {
      const elem = document.querySelector('.sect4_t3');
      elem.style.color = 'red';
      if (!isMoving) {
          isMoving = true;
          const interval = setInterval(() => {
              value4_3 += 3;
              elem.textContent = `${value4_3}`;
          }, 1000);
          document.addEventListener('mouseleave', () => {
              clearInterval(interval);
              elem.style.color = 'white';
              isMoving = false;
          }, { once: true });
      }
  });

  document.addEventListener('mousemove', (e) => {
      const elem = document.querySelector('.sect8_t8');
      elem.style.color = 'green';
      elem.textContent = 'GHBU';
      document.addEventListener('mouseleave', () => {
          elem.style.color = 'white';
          elem.textContent = 'STBU';
      }, { once: true });
  });

  let value8_5 = 15.1;
  setInterval(() => {
      const elem = document.querySelector('.sect8_t5');
      value8_5++;
      elem.textContent = `${value8_5}MM`;
  }, 1000);

  document.addEventListener('mousemove', (e) => {
      const elem = document.querySelector('.sect6_t3, .sect6_t3v2');
      const value = Math.floor(e.clientX / 100);
      elem.textContent = `${String(value).padStart(2, '0')}.${e.clientX % 10}`;
  });

  let value6_1 = 10.5;
  setInterval(() => {
      const elem = document.querySelector('.sect6_t1, .sect6_t1v2');
      value6_1 += 2;
      elem.textContent = `${value6_1.toFixed(1)}`;
  }, 2000);

  let value6_2 = 10.0;
  setInterval(() => {
      const elem = document.querySelector('.sect6_t2, .sect6_t2v2');
      value6_2 += 2;
      elem.textContent = `${value6_2.toFixed(1)}`;
  }, 2000);


  
  document.addEventListener('mousemove', (e) => {
      const elem = document.querySelector('.sect8_t2');
      const value = e.clientX / 10 + 100; 
      elem.textContent = `${value.toFixed(1)}`;
  });

  
  document.addEventListener('mousemove', (e) => {
      const elem = document.querySelector('.sect8_t3');
      const value = e.clientX / 100 + 10; 
      elem.textContent = `${value.toFixed(1)}`;
  });

  
  let value8_9 = 3;
  let isMoving8_9 = false;
  document.addEventListener('mousemove', (e) => {
      const elem = document.querySelector('.sect8_t9');
      if (!isMoving8_9) {
          isMoving8_9 = true;
          value8_9 *= 2;
          elem.textContent = `Expert – ${value8_9} CPu`;
          document.addEventListener('mouseleave', () => {
              isMoving8_9 = false;
          }, { once: true });
      }
  });
    
  
  
 
  document.addEventListener("mousemove", (event) => {
    let x = event.clientX;
    let y = event.clientY;
    let newNumber1 = Math.floor(x / 10);
    let newNumber2 = Math.floor(y / 10);
    let element = document.querySelector(".sect1_t4");
    if (element) {
      element.textContent = `${newNumber1}/${newNumber2}`;
    }
  });

 
  let first = document.querySelectorAll(".sect3_t1");
  document.addEventListener("mousemove", function (event) {
    let screenW = window.innerWidth;
    let lSide = event.clientX < screenW / 2;
    first.forEach(function (span) {
      if (span.textContent.toUpperCase() === "COPI") {
        span.style.color = lSide ? "red" : "white";
      }
    });
  });

  
  let second = document.querySelectorAll(".sect1_t2");
  document.addEventListener("mousemove", function (event) {
    let screenW = window.innerWidth;
    let RSide = event.clientX < screenW / 2;
    second.forEach(function (span) {
      if (span.textContent.toUpperCase() === "WHT") {
        span.style.color = RSide ? "red" : "white";
      }
    });
  });

  
  document.addEventListener("mousemove", (event) => {
    const square = document.querySelector(".square");
    const checkedText = document.querySelector(".checked-text");
    if (event.clientX >= 400) {
      square.style.background = "#7CFC00";
      checkedText.style.display = "block";
    } else {
      square.style.background = "black";
      checkedText.style.display = "none";
    }
  });

  
  const img = document.querySelector(".img4_1");
  let lastX = window.innerWidth / 2;
  document.addEventListener("mousemove", (event) => {
    let movement = event.clientX < lastX ? 200 : -100;
    img.style.transform = `translate(${movement}px, -50%)`;
    lastX = event.clientX;
  });

  
  const sect1_t1 = document.querySelector(".sect1_t1");
  document.addEventListener("mousemove", (event) => {
    if (event.clientX >= 300) {
      sect1_t1.textContent = "OHG";
    } else {
      sect1_t1.textContent = "NAR";
    }
  });

  
  const sect2_t1 = document.querySelector(".sect2_t1");
  document.addEventListener("mousemove", (event) => {
    if (event.clientX >= 300) {
      sect2_t1.textContent = "AsCC";
    } else {
      sect2_t1.textContent = "ARCT";
    }
  });

  
  const sect2_t3 = document.querySelector(".sect2_t3");
  document.addEventListener("mousemove", (event) => {
    if (event.clientX >= 700) {
      sect2_t3.style.backgroundColor = "green";
      sect2_t3.textContent = "W1 0 – 0/0";
    } else {
      sect2_t3.style.backgroundColor = ""; 
      sect2_t3.textContent = "W1 15 – 34/23";
    }
  });

 
  const sect5_t2 = document.querySelector(".sect5_t2");
  let currentValue = parseInt(sect5_t2.textContent); 
  setInterval(() => {
    currentValue += 2;
    sect5_t2.textContent = currentValue;
    sect5_t2.classList.add("flip-animation");
    setTimeout(() => sect5_t2.classList.remove("flip-animation"), 300);
  }, 1000);


  const sect5_t4 = document.querySelector(".sect5_t4");
  let [minutes, seconds] = sect5_t4.textContent.split(":").map(Number); 
  function updateStopwatch() {
    seconds++;
    if (seconds >= 60) {
      minutes++;
      seconds = 0;
    }
    let formattedTime = `${String(minutes).padStart(4, "0")}:${String(seconds).padStart(2, "0")}`;
    sect5_t4.classList.add("flip-animation");
    setTimeout(() => {
      sect5_t4.textContent = formattedTime;
      sect5_t4.classList.remove("flip-animation");
    }, 300);
    setTimeout(updateStopwatch, 1000);
  }
  updateStopwatch();

});



if (window.innerWidth <= 768) {
  const numberElements = document.querySelectorAll('.sect2 p, .sect9 p');
  const originalValues = Array.from(numberElements).map(el => el.textContent);

  
  setInterval(() => {
    numberElements.forEach((el, index) => {
      let text = el.textContent;
      let newText = text.replace(/\d+(\.\d+)?/g, (match) => {
        let num = parseFloat(match);
        return (num + 1).toString();
      });

      
      if (text.includes('R')) {
        newText = newText.replace(/R/g, 'H');
      } else if (text.includes('H')) {
        newText = newText.replace(/H/g, 'R');
      }
      el.textContent = newText;
    });
  }, 1000);
}


const cols = Math.floor(window.innerWidth / 20);
const rows = Math.floor(window.innerHeight / 20);
const cir = [];


for (let y = 0; y < rows; y++) {
  for (let x = 0; x < cols; x++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    grid.appendChild(circle);
    cir.push({ element: circle, x: x * 20, y: y * 20 });
  }
}


function animateJitter() {
  cir.forEach((circle, index) => {
    const xOffset = Math.random() * 4 - 2; // Сдвиг по оси X
    const yOffset = Math.random() * 4 - 2; // Сдвиг по оси Y
    circle.element.style.transform = `translate(${circle.x + xOffset}px, ${circle.y + yOffset}px)`;
  });
  requestAnimationFrame(animateJitter); 
}

animateJitter(); 


document.addEventListener('mousemove', function (e) {
  
});

// Анимация дрожания
function animateJitter() {
    cir.forEach(circle => {
        const moveX = (Math.random() - 0.5) * 8;
        const moveY = (Math.random() - 0.5) * 8;
        circle.element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    requestAnimationFrame(animateJitter);
}
animateJitter();


document.addEventListener("mousemove", (e) => {
    cir.forEach(circle => {
        const dx = e.clientX - circle.x;
        const dy = e.clientY - circle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
            const angle = Math.atan2(dy, dx);
            const moveX = Math.cos(angle) * 40;
            const moveY = Math.sin(angle) * 40;

            circle.element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });
});


const canvas = document.getElementById('perspectiveCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const dots = [];
const maxDots = 3000; 

let mouseMoving = false;
let lastMouseMove = Date.now();

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createDot(x = null, y = null, z = null, size = null) {
  
  const hue = random(20, 40); 
  const saturation = random(70, 100);
  const lightness = random(50, 80);
  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  return {
    x: x !== null ? x : random(-canvas.width, canvas.width), 
    y: y !== null ? y : random(-canvas.height, canvas.height),
    z: z !== null ? z : random(0, canvas.width * 2), 
    size: size !== null ? size : random(15, 35),
    baseSpeed: random(2, 6),
    currentSpeed: 0,
    isExploding: false,
    explodeProgress: 0,
    color: color 
  };
}


for (let i = 0; i < maxDots; i++) {
  dots.push(createDot());
}

function drawDot(dot) {
  const scale = 300 / (300 + dot.z);
  const screenX = canvas.width / 2 + dot.x * scale;
  const screenY = canvas.height / 2 + dot.y * scale;
  const size = dot.size * scale;

  
  const gradient = ctx.createRadialGradient(screenX, screenY, 0, screenX, screenY, size);
  gradient.addColorStop(0, dot.color); 
  gradient.addColorStop(1, 'rgba(255, 147, 0, 0)');

  ctx.beginPath();
  ctx.arc(screenX, screenY, size, 0, Math.PI * 2);
  ctx.fillStyle = gradient;
  ctx.fill();
}

function explodeDot(dot) {
  if (dot.explodeProgress < 1) {
    dot.explodeProgress += 0.05;
    const factor = 1 + dot.explodeProgress * 2;
    dot.x *= factor;
    dot.y *= factor;
    dot.size *= 0.9;
  } else {
    for (let i = 0; i < 6; i++) {
      dots.push(createDot(dot.x, dot.y, dot.z, dot.size / 2));
    }
    dot.isExploding = false;
    dot.explodeProgress = 0;
    dot.size = 0;
  }
}

document.addEventListener('mousemove', () => {
  mouseMoving = true;
  lastMouseMove = Date.now();
});

canvas.addEventListener('click', (event) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;
  const scale = 300 / (300 + canvas.width / 2);

  dots.forEach((dot) => {
    const screenX = canvas.width / 2 + dot.x * scale;
    const screenY = canvas.height / 2 + dot.y * scale;
    const size = dot.size * scale;

    if (
      mouseX > screenX - size / 2 &&
      mouseX < screenX + size / 2 &&
      mouseY > screenY - size / 2 &&
      mouseY < screenY + size / 2
    ) {
      dot.isExploding = true;
    }
  });
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const timeSinceLastMove = Date.now() - lastMouseMove;
  const isMouseIdle = timeSinceLastMove > 500;

  for (let i = dots.length - 1; i >= 0; i--) {
    const dot = dots[i];

    if (mouseMoving && !isMouseIdle) {
      dot.currentSpeed = dot.baseSpeed * 2;
    } else {
      dot.currentSpeed = dot.baseSpeed * 0.5;
    }

    if (dot.isExploding) {
      explodeDot(dot);
    } else {
      dot.z -= dot.currentSpeed;

      if (dot.z < 1) {
        Object.assign(dot, createDot());
        dot.z = canvas.width * 2; 
      }

      drawDot(dot);
    }

    if (dot.size <= 0) {
      dots.splice(i, 1);
    }
  }

  if (isMouseIdle) {
    mouseMoving = false;
  }

  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
 
  dots.length = 0;
  for (let i = 0; i < maxDots; i++) {
    dots.push(createDot());
  }
});

animate();


let popups = [
  document.querySelector(".popup1"),
  document.querySelector(".popup2"),
  document.querySelector(".popup3")
];

let centerDots = document.querySelector(".center-dots");
let topLeftCircles = document.querySelector(".top-left-circles");
let bottomRightCircles = document.querySelector(".bottom-right-circles");

function showPopup(index) {
  if (!popups[index - 1].classList.contains("show")) {
    popups.forEach(popup => popup.classList.remove("show"));
    popups[index - 1].classList.add("show");
  }
}

centerDots.addEventListener("click", () => showPopup(1));
topLeftCircles.addEventListener("click", () => showPopup(2));
bottomRightCircles.addEventListener("click", () => showPopup(3));

document.querySelectorAll(".closeButton").forEach(button => {
  button.addEventListener("click", () => {
    popups.forEach(popup => popup.classList.remove("show"));
  });
});

});