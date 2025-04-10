const labels = [
  "Middle Eastern", "Arab", "American", "Other", "Foreign",
  "Pakistani", "Confused", "Outsider", "South Asian", "Brown",
  "Student", "Undefined", "Non-resident alien", "International student"
];

function startAnimation() {
  const button = document.getElementById('startButton');
  button.classList.add('crack');
  button.disabled = true;

  setTimeout(() => {
    document.getElementById('intro').classList.add('hidden');
    const roller = document.getElementById('roller');
    const slot = document.getElementById('slot');
    const results = document.getElementById('results');
    roller.classList.remove('hidden');

    let i = 0;

    function showWord(count) {
      const label = labels[Math.floor(Math.random() * labels.length)];
      slot.textContent = label;

      const wordEl = document.createElement('div');
      wordEl.textContent = label;
      wordEl.className = `picked word${count}`;
      results.appendChild(wordEl);
    }

    const interval = setInterval(() => {
      i++;
      if (i === 15) showWord(1);
      if (i === 30) showWord(2);
      if (i === 45) {
        showWord(3);
        clearInterval(interval);
        setTimeout(() => {
          roller.classList.add('hidden');
          document.getElementById('message').classList.remove('hidden');
        }, 2000);
      } else {
        slot.textContent = labels[Math.floor(Math.random() * labels.length)];
      }
    }, 100);
  }, 500);
}

function revealPoem() {
  const poem = document.getElementById('poem');
  const container = document.getElementById('mainContainer');

  poem.classList.remove('hidden');
  container.classList.add('show-scroll');

  poem.scrollIntoView({ behavior: "smooth" });
}

function restartExperience() {
  document.body.classList.add("cracked");

  setTimeout(() => {
    document.getElementById("intro").classList.remove("hidden");
    document.getElementById("roller").classList.add("hidden");
    document.getElementById("message").classList.add("hidden");
    document.getElementById("poem").classList.add("hidden");
    document.getElementById("mainContainer").classList.remove("show-scroll");

    document.getElementById("results").innerHTML = "";
    document.getElementById("slot").textContent = "Loading...";
    document.getElementById("startButton").disabled = false;

    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.classList.remove("cracked");
  }, 1000);
}
