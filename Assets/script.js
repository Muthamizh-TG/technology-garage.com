document.querySelectorAll(".openFormBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("popupForm").style.display = "flex";
  });
});

document.getElementById("closeFormBtn").onclick = () => {
  document.getElementById("popupForm").style.display = "none";
};

window.onclick = (e) => {
  if (e.target.id === "popupForm") {
    document.getElementById("popupForm").style.display = "none";
  }
};