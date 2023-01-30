const likeButtons = document.querySelectorAll(".like-btn");
likeButtons.forEach(button => {
  button.addEventListener("click", function(){
    const likedPage = document.querySelector("#liked-page");
    const likedGym = document.createElement("div");
    likedGym.innerHTML = `<h2>${gymName}</h2><p>${gymLocation}</p>`;
    likedPage.appendChild(likedGym);
    localStorage.setItem("likedGyms", JSON.stringify(likedGyms));
  });
});
