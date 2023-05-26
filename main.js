let expandedSlide = null;

document.querySelectorAll(".slide").forEach((slide) => {
  slide.addEventListener("click", () => {
    if (expandedSlide && expandedSlide !== slide) {
      expandedSlide.style.width = "100px";
      expandedSlide.style.height = expandedSlide.classList.contains("odd")
        ? "calc(100vh - 50px)"
        : "100vh";
      expandedSlide.querySelector(".testimonial").classList.add("hidden");
      expandedSlide.classList.remove("expanded");
    }

    slide.style.width = slide.style.width === "100px" ? "100vw" : "100px";
    slide.style.height = "100vh";

    if (slide.style.width === "100vw") {
      slide.classList.add("expanded");
      setTimeout(() => {
        slide.querySelector(".testimonial").classList.remove("hidden");
      }, 500); // delay in ms matching the CSS transition duration
    } else {
      slide.querySelector(".testimonial").classList.add("hidden");
      slide.style.height = slide.classList.contains("odd")
        ? "calc(100vh - 50px)"
        : "100vh";
      slide.classList.remove("expanded");
    }

    expandedSlide = slide.style.width === "100vw" ? slide : null;
  });
});