el = document.querySelector("h2");
el.classList.add("accessibility-hidden");
document.querySelector(".something").addEventListener("click", function(){el.classList.remove("accessibility-hidden")});
