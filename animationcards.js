document.addEventListener("DOMContentLoaded", function() {
    VanillaTilt.init(document.querySelector(".feature-icon"), {
      max: 18,
      speed: 450
    });
    
    VanillaTilt.init(document.querySelectorAll(".feature-icon"));
    });