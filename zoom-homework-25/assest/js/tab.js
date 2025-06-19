document.querySelectorAll(".js-tab-list").forEach((tabs) => {
  tabs.querySelectorAll(".js-tab-item").forEach((tab) => {
    tab.onclick = function () {
      tabs.querySelector(".active").classList.remove("active");
      this.classList.toggle("active");
    };
  });
});
