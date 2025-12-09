function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.innerHTML = "❆";
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.animationDuration = (5 + Math.random() * 5) + "s";
  snowflake.style.fontSize = (12 + Math.random() * 18) + "px";
  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 10000);
}

setInterval(createSnowflake, 200);
