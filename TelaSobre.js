const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

document.addEventListener("click", (event) => {
    if (
        !sidebar.contains(event.target) &&
        !menuBtn.contains(event.target)
    ) {
        sidebar.classList.remove("active");
    }
});