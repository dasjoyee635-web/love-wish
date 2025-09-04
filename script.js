const wishes = [
  "Happy Anniversary, NAME! Wishing you a lifetime of love & happiness.",
  "NAME, may your love story keep getting better with every passing year!",
  "To my dear NAME, you are the reason love feels magical. Happy Anniversary!"
];

function generateWish() {
  const name = document.getElementById('nameInput').value || 'Friend';
  const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
  const wishText = randomWish.replace('NAME', name);
  document.getElementById('wishOutput').textContent = wishText;
}

