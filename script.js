const labels = [
  "Middle Eastern", "Arab", "American", "Other", "Foreign",
  "Pakistani", "Confused", "Outsider", "South Asian", "Brown",
  "Student", "Undefined", "Non-resident alien", "International student"
];

function startAnimation() {
  document.getElementById('intro').classList.add('hidden');
  const roller = document.getElementById('roller');
  const slot = document.getElementById('slot');
  roller.classList.remove('hidden');

  let i = 0;
  const interval = setInterval(() => {
    slot.textContent = labels[Math.floor(Math.random() * labels.length)];
    i++;
    if (i > 30) {
      clearInterval(interval);
      const finalLabel = labels[Math.floor(Math.random() * labels.length)];
      slot.textContent = finalLabel;
      setTimeout(() => {
        roller.classList.add('hidden');
        document.getElementById('message').classList.remove('hidden');
      }, 2000);
    }
  }, 100);
}
