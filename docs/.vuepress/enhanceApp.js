export default {
  mounted() {
    const header = document.querySelector(".navbar");
    let lastScrollTop = header.offsetHeight;
    window.addEventListener("scroll", () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        header.classList.add("hidden");
      } else {
        header.classList.remove("hidden");
      }
      lastScrollTop = scrollTop;
    });
  },
};
