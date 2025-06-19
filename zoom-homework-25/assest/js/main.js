const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const checkAllBox = $("#checkAll");
const rowCheckboxes = $$(".row-checkbox");
const selectedCount = $(".selected-count");

function updateSelectedCount() {
  const checkedCount = $$(".row-checkbox:checked").length;
  const total = rowCheckboxes.length;
  selectedCount.textContent = `Đã chọn: ${checkedCount}/${total}`;
}

function updateCheckAllState() {
  const checkedCount = $$(".row-checkbox:checked").length;
  const total = rowCheckboxes.length;

  if (checkedCount === 0) {
    checkAllBox.checked = false;
    checkAllBox.indeterminate = false;
  } else if (checkedCount === total) {
    checkAllBox.checked = true;
    checkAllBox.indeterminate = false;
  } else {
    checkAllBox.checked = false;
    checkAllBox.indeterminate = true;
  }
}

checkAllBox.addEventListener("change", function () {
  const isChecked = checkAllBox.checked;
  rowCheckboxes.forEach((checkbox) => {
    checkbox.checked = isChecked;
  });

  checkAllBox.indeterminate = false;
  updateSelectedCount();
});

rowCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    updateCheckAllState();
    updateSelectedCount();
  });
});

updateSelectedCount();
