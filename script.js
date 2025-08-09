const formEl = document.getElementById("form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputEl = document.getElementById("table").value;
  const rootEl = document.getElementById("root");
  formEl.reset();

  rootEl.innerHTML = "";

  if (inputEl.trim() === "" || isNaN(inputEl)) {
    rootEl.innerHTML = "😉 Please enter a valid number 😊";
    return;
  }

  let col1 = "";
  let col2 = "";

  for (let i = 1; i <= 10; i++) {
    const line = `<b>${inputEl} x ${i} = ${i * inputEl}</b><br>`;
    if (i <= 5) {
      col1 += line;
    } else {
      col2 += line;
    }
  }

  // Set innerHTML with proper styling to avoid wrapping issues
  rootEl.innerHTML = `
    <div style="display: flex; justify-content: space-between; gap: 20px; flex-wrap: wrap; max-width: 400px;">
      <div style="flex: 1; min-width: 100px;">
        ${col1}
      </div>
      <div style="flex: 1; min-width: 100px;">
        ${col2}
      </div>
    </div>
  `;
});
