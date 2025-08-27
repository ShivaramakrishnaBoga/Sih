document.querySelector(".startupincubated").addEventListener("wheel", (e) => {
    e.preventDefault(); // Prevent default scrolling
    e.currentTarget.scrollBy({
        left: e.deltaY * 0.5,
        behavior: "smooth", // Enables smooth animation
    });
});
