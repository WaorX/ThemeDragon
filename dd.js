document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const darkDragon = document.getElementById("dark-dragon");
    const lightDragon = document.getElementById("light-dragon");

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        darkDragon.classList.add("hidden");
        lightDragon.classList.remove("hidden");
    }

    const toggleTheme = () => {
        const isDark = body.classList.toggle("dark-theme");
        if (isDark) {
            body.style.backgroundColor = "black";
            body.style.color = "white";
            darkDragon.classList.add("hidden");
            lightDragon.classList.remove("hidden");
            localStorage.setItem("theme", "dark");
        } else {
            body.style.backgroundColor = "white";
            body.style.color = "black";
            darkDragon.classList.remove("hidden");
            lightDragon.classList.add("hidden");
            localStorage.setItem("theme", "light");
        }
    };

    darkDragon.addEventListener("click", toggleTheme);
    lightDragon.addEventListener("click", toggleTheme);
});

// Made by WaorX //