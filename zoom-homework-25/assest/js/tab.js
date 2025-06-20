document.querySelectorAll(".js-tab-list").forEach((tabs) => {
  tabs.tabIndex = 0;
  tabs.addEventListener("keydown", handleActiveTab);
  tabs.addEventListener("click", handleActiveTab);

  function handleActiveTab(e) {
    tabs.querySelectorAll(".js-tab-item").forEach((tab, i) => {
      if (i === e.key - 1 || tab === e.target.closest(".js-tab-item")) {
        tabs.querySelector(".active")?.classList.remove("active");
        tab.classList.add("active");
      }
    });
  }
});
