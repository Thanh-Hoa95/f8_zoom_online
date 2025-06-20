document.querySelectorAll(".js-tab-list").forEach((tabList) => {
  const tabItems = tabList.querySelectorAll(".tab-item");
  tabItems.forEach((tab, i) => {
    tab.tabIndex = 0;
    tab.addEventListener("click", () => {
      tabList.querySelector(".active")?.classList.remove("active");
      tab.classList.add("active");
    });
    tab.addEventListener("keydown", (e) => {
      const keyNum = Number(e.key);
      if (!isNaN(keyNum) && keyNum >= 1 && keyNum <= tabItems.length) {
        tabList.querySelector(".active")?.classList.remove("active");
        tabItems[keyNum - 1].classList.add("active");
      }
    });
  });
});
