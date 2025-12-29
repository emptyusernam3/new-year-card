function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.innerHTML = "❄️";
    snowflake.style.position = "fixed";
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.top = "-20px";
    snowflake.style.fontSize = Math.random() * 20 + 10 + "px";
    snowflake.style.opacity = Math.random();
    snowflake.style.transition = "top 5s linear";

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.style.top = "100vh";
    }, 100);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 300);
