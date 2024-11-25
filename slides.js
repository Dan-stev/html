document.addEventListener("DOMContentLoaded", () => {
  const loading = document.getElementById("loading");
  setTimeout(() => {
      loading.style.opacity = 0; // Fade out
      setTimeout(() => {
          loading.style.display = "none"; 
      }, 500); 
  }, 2700); 
});
