document.querySelectorAll(".js-tab-list").forEach((tabs) => {
  tabs.tabIndex = 0;
  const tabItems = tabs.querySelectorAll(".js-tab-item");
  tabs.addEventListener("keydown", handleActiveTab);
  tabs.addEventListener("click", handleActiveTab);

  function handleActiveTab(e) {
    tabItems.forEach((tab, i) => {
      if (i === e.key - 1 || e.target.closest(".tab")) {
        tabs.querySelector(".active")?.classList.remove("active");
        tab.classList.add("active");
      }
    });
  }
});
