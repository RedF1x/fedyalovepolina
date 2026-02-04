const flash = document.getElementById("flash");

const quotes = [
    "Ты - мой самый тёплый дом 🖤",
    "Любовь - это когда даже тишина с тобой красивая",
    "Я выбираю тебя. Каждый день.",
    "Ты - моё любимое совпадение",
    "С тобой даже ночь светлая",
    "С твоим взглядом на себе даже в абсолютный ноль тепло",
    "Любовь - это когда мы с тобой вместе",
    "С тобой даже февраль кажется тёплым)",
    "Я бы узнал тебя в любой вселенной",
    "Ты пришла - и мир перестал шуметь",
    "Мне нравится, как ты остаёшься...",
    "С тобой время перестаёт торопиться",
    "Я люблю тебя в паузах между словами",
    "Ты - редкое совпадение, которое не хочется отпускать",
    "Я хочу стареть рядом с твоим смехом",
    "Ты - мой любимый риск",
    "С тобой даже страхи говорят шёпотом",
    "Ты - мой ответ без вопроса",
    "Я влюбляюсь в тебя каждый раз заново",
    "Ты - как ночь, в которой не страшно",
    "Мне нравится быть уязвимым рядом с тобой",
    "Ты - мой самый честный выбор",
    "С тобой хочется быть настоящим",
    "Ты - тепло, которое не обжигает",
    "Ты - мой самый красивый беспорядок",
    "Ты - как песня, которую не устаёшь слушать",
    "Мне нравится молчать вместе с тобой",
    "Ты - моя самая нежная слабость",
    "С тобой мир не давит",
    "Ты - как утро без будильника",
    "С тобой хочется быть лучше, но не притворяться",
    "Я люблю тебя не громко, но навсегда",
    "Ты - мой самый красивый случай",
    "Я бы прожил эту жизнь ещё раз - если в ней есть ты"
];


const PASSWORD = "12062025";

const lockScreen = document.getElementById("lockScreen");
const site = document.getElementById("site");
const enterBtn = document.getElementById("enterBtn");
const input = document.getElementById("passwordInput");
const errorText = document.getElementById("errorText");

function unlock() {
    
    if (input.value === PASSWORD) {
        heartExplosion();
        lockScreen.style.opacity = 0;
        flash.style.opacity = 0.7;
        setTimeout(() => {
            lockScreen.style.display = "none";
            site.classList.remove("hidden");
            flash.style.opacity = 0;
        }, 1200);
    }  
    else {
    input.classList.add("shake");
    input.value = "";

    setTimeout(() => {
        input.classList.remove("shake");
    }, 400);
}

    }


const startDate = new Date("2025-06-12T04:00:00");

const timerEl = document.getElementById("timeTogether");

const quoteEl = document.getElementById("quote");

enterBtn.addEventListener("click", unlock);
input.addEventListener("keydown", e => {
    if (e.key === "Enter") unlock();
});




function setRandomQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    quoteEl.style.opacity = 0;

    setTimeout(() => {
        quoteEl.textContent = quotes[random];
        quoteEl.style.opacity = 1;
    }, 500);
}

setRandomQuote();

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;

    timerEl.textContent = `${days} дней ${hours} часов ${minutes} минут`;
}

setInterval(updateTimer, 1000);
updateTimer();

// зверушки
const pets = [
    "https://images.unsplash.com/photo-1618265341355-d0e2d1fdf26b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1605638868237-0660a05a135b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664299467398-76f5513ad005?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/34205333/pexels-photo-34205333.jpeg",
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1675848495392-6b9a3b962df0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1759561550844-55676f20f373?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1759747548874-8198967d7004?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1715073318678-1413280be2c1?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1728487877306-6211b309260e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/14030389/pexels-photo-14030389.jpeg",
    "https://images.pexels.com/photos/14316638/pexels-photo-14316638.jpeg",
    "https://images.pexels.com/photos/32631284/pexels-photo-32631284.jpeg",
    "https://cdn.pixabay.com/photo/2019/10/13/17/02/cat-4546554_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/07/19/20/11/kitten-6479019_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/02/25/00/17/kitten-4018756_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/11/10/09/22/cats-3806264_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/11/10/09/22/cats-3806270_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/11/26/21/02/cat-4655520_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/07/06/16/20/dog-5377479_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/09/12/16/42/dog-9830812_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/02/17/10/19/dachshund-4856079_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/12/03/06/35/dachshund-7632177_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/03/02/14/13/dog-1232449_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/07/06/16/20/dog-5377479_1280.jpg",
]

function createFlyingImage(src, startX, startY) {
    const img = document.createElement("img");
    img.src = src;
    img.className = "magic-img";

    let x = startX;
    let y = startY;

    img.style.left = x + "px";
    img.style.top = y + "px";

    // 🎲 РАВНЫЕ ШАНСЫ: 33 / 33 / 34
    const r = Math.random();
    let speed;

    if (r < 0.3333) {
        speed = 1.5 + Math.random() * 0.7;     // близко
    } else if (r < 0.6666) {
        speed = 2.2 + Math.random() * 1.1;       // средне
    } else {
        speed = 3.4 + Math.random() * 1.3;     // далеко (но не ракета)
    }

    let angle = Math.random() * Math.PI * 2;
    let vx = Math.cos(angle) * speed;
    let vy = Math.sin(angle) * speed;

    document.body.appendChild(img);

    const size = 120;
    const startTime = performance.now();

    function animate(time) {
        const elapsed = time - startTime;

        x += vx;
        y += vy;
        
        const drag = 0.999;   // чем ближе к 1 — тем дольше летит
        vx *= drag;
        vy *= drag;

        //  ОТСКОКИ ОТ КРАЁВ (DVD EFFECT)
        if (x <= 0 || x + size >= window.innerWidth) {
            vx *= -1;
        }

        if (y <= 0 || y + size >= window.innerHeight) {
            vy *= -1;
        }

        img.style.transform = `translate(${x - startX}px, ${y - startY}px)`;

    // НАСТРОЙКИ ВРЕМЕНИ ЖИЗНИ
        const fadeStart = 5000; // когда начинать угасание
        const lifeTime = 7000; // полное время жизни

        if (elapsed > fadeStart) {
            img.style.opacity = 0;
        }

        if (elapsed < lifeTime) {
            requestAnimationFrame(animate);
        } else {
            img.remove();
        }

        }

    requestAnimationFrame(animate);
}

const btn = document.querySelector(".magic-btn");
const petsContainer = document.querySelector(".pets");
const final = document.querySelector(".final");

btn.addEventListener("click", () => {

    setRandomQuote();

    const rect = btn.getBoundingClientRect();
    const startX = rect.left + rect.width / 2 - 60;
    const startY = rect.top + rect.height / 2 - 60;

    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * pets.length);
        createFlyingImage(pets[randomIndex], startX, startY);
    }

    final.classList.remove("hidden");
    setTimeout(() => final.style.opacity = 1, 500);

    console.log("Полина, ты - мой самый любимый человек 🖤🤍");
});

let lastX = null;
let lastY = null;

function createHeart(x, y) {
    const heart = document.createElement("div");
    heart.className = "trail";
    heart.textContent = "❤";
    heart.style.left = x + "px";
    heart.style.top = y + "px";

    document.body.appendChild(heart);

    // искры
    for (let i = 0; i < 3; i++) {
        const spark = document.createElement("div");
        spark.className = "spark";
        spark.style.left = x + "px";
        spark.style.top = y + "px";

        const angle = Math.random() * Math.PI * 2;
        const distance = 20 + Math.random() * 20;

        spark.style.setProperty("--x", Math.cos(angle) * distance + "px");
        spark.style.setProperty("--y", Math.sin(angle) * distance + "px");

        document.body.appendChild(spark);

        setTimeout(() => spark.remove(), 800);
    }

    setTimeout(() => heart.remove(), 1000);
}

function createSoftHeart(x, y) {
    const heart = document.createElement("div");
    heart.className = "trail";
    heart.textContent = "❤";
    heart.style.left = x + "px";
    heart.style.top = y + "px";

    document.body.appendChild(heart);

    // лёгкие искры (не всегда)
    if (Math.random() < 0.4) {
        for (let i = 0; i < 2; i++) {
            const spark = document.createElement("div");
            spark.className = "spark";
            spark.style.left = x + "px";
            spark.style.top = y + "px";

            spark.style.setProperty(
                "--x",
                (Math.random() - 0.5) * 20 + "px"
            );
            spark.style.setProperty(
                "--y",
                (Math.random() - 0.5) * 20 + "px"
            );

            document.body.appendChild(spark);
            setTimeout(() => spark.remove(), 1000);
        }
    }

    setTimeout(() => heart.remove(), 1200);
}

document.addEventListener("mousemove", (e) => {
    createSoftHeart(e.clientX, e.clientY);
});

document.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    createSoftHeart(t.clientX, t.clientY);
});

let unlocked = false;

function heartExplosion() {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.className = "trail";
        heart.textContent = "❤";

        heart.style.left = cx + "px";
        heart.style.top = cy + "px";

        const angle = Math.random() * Math.PI * 2;
        const distance = 60 + Math.random() * 80;

        heart.style.setProperty("--x", Math.cos(angle) * distance + "px");
        heart.style.setProperty("--y", Math.sin(angle) * distance + "px");

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 1500);
    }
}

const mainHeart = document.getElementById("mainHeart");

mainHeart.addEventListener("click", (e) => {
    const rect = mainHeart.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    heartBurst(cx, cy);
});

function heartBurst(x, y) {
    const count = 24;

    for (let i = 0; i < count; i++) {
        const h = document.createElement("div");
        h.className = "heart-particle";
        h.textContent = "❤";

        h.style.left = x + "px";
        h.style.top = y + "px";

        const angle = Math.random() * Math.PI * 2;
        const distance = 40 + Math.random() * 80;

        h.style.setProperty("--x", Math.cos(angle) * distance + "px");
        h.style.setProperty("--y", Math.sin(angle) * distance + "px");

        document.body.appendChild(h);

        setTimeout(() => h.remove(), 1600);
    }
}
