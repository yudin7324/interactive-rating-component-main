document.addEventListener("DOMContentLoaded", () => {
  const ACTIVE = 'active';

  const card = document.querySelector('.card');
  const intro = document.getElementById("intro");
  const response = document.getElementById("response");
  const score = document.getElementById("score");
  const button = document.getElementById("card-btn");
  const ratingLength = document.querySelectorAll("input[name='rating']").length;

  button.addEventListener("click", () => {
    const selectedRating = document.querySelector("input[name='rating']:checked");

    if (selectedRating) {
      intro.classList.remove(ACTIVE);
      response.classList.add(ACTIVE);

      score.innerHTML = `You selected ${selectedRating.value} out of ${ratingLength}`
    } else {
      alert("Please select a rating");
    }
  });

  document.addEventListener("click", function(event) {
    if (!card.contains(event.target)) {
      intro.classList.add(ACTIVE);
      response.classList.remove(ACTIVE);
    }
  })
});
