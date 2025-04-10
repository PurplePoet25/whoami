body {
  margin: 0;
  background-color: #0f0f0f;
  font-family: 'Georgia', serif;
  color: #fff;
  text-align: center;
  padding: 0 20px;
  overflow-x: hidden;
}

.container {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding-top: 20vh;
}

.container.show-scroll {
  padding-top: 40px;
}

h1, p, button {
  margin: 12px 0;
}

button {
  padding: 12px 24px;
  background-color: #3e2d24;
  color: white;
  border: none;
  font-size: 1em;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.3s ease;
}

button:hover {
  background-color: #5a4134;
}

button.crack {
  transform: scale(0.98) rotate(-2deg);
  box-shadow: 0 0 10px red;
  background-color: #8b2c2c;
}

.fade-in {
  animation: fadeIn 1.2s ease-in-out forwards;
  opacity: 0;
}

.hidden {
  display: none;
}

.slot {
  font-size: 1.8em;
  margin-bottom: 2.5em;
}

.results div {
  font-size: 1.5em;
  opacity: 1;
  animation: crashDrop 0.8s ease-in-out forwards;
  position: relative;
  display: inline-block;
}

.word1 { animation-delay: 0.4s; transform: rotate(-2deg); }
.word2 { animation-delay: 0.8s; transform: rotate(2deg); }
.word3 { animation-delay: 1.2s; transform: rotate(-1deg); }

@keyframes crashDrop {
  0% { transform: translateY(-100px) scale(1.2) rotate(0deg); opacity: 0; }
  70% { transform: translateY(20px) scale(1) rotate(10deg); opacity: 1; }
  100% { transform: translateY(0) rotate(0deg); }
}

.message p {
  font-size: 1.25em;
  margin-top: 20px;
  opacity: 0;
  animation: fadeText 1s ease-in forwards;
}

.message .signoff {
  font-size: 1em;
  color: #aaa;
  margin-top: 40px;
}

.poem {
  margin-top: 150px;
  padding-top: 40px;
  animation: fadeText 1s ease-in forwards;
  text-align: left;
}

.poem h2 {
  font-size: 1.4em;
  margin-bottom: 20px;
}

.poem p {
  margin: 8px 0;
  font-size: 1.1em;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

@keyframes fadeText {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    text-shadow: 0 0 5px #ff6666;
  }
  50% {
    transform: scale(1.2);
    text-shadow: 0 0 15px #ff6666;
  }
}

@keyframes floatDot {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(var(--x), var(--y)) scale(0.5);
    opacity: 0;
  }
}

.past-word {
  position: relative;
  display: inline-block;
}

.past-word strong {
  color: #ff6666;
  font-size: 1.2em;
  cursor: pointer;
  transition: transform 0.3s ease;
  animation: pulse 1.5s infinite;
  position: relative;
  z-index: 2;
}

.past-word .bubble {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #ff6666;
  border-radius: 50%;
  animation: floatDot 2s ease-out infinite;
  opacity: 0;
  z-index: 1;
}

/* Position multiple floating bubbles randomly */
.past-word .bubble:nth-child(1) { top: -8px; left: 10%; --x: -10px; --y: -50px; animation-delay: 0s; }
.past-word .bubble:nth-child(2) { top: -8px; left: 30%; --x: 5px; --y: -60px; animation-delay: 0.5s; }
.past-word .bubble:nth-child(3) { top: -8px; left: 60%; --x: -15px; --y: -55px; animation-delay: 1s; }
.past-word .bubble:nth-child(4) { top: -8px; left: 80%; --x: 10px; --y: -70px; animation-delay: 1.5s; }

.past-word strong:hover {
  transform: scale(1.05);
  text-shadow: 0 0 8px #ff6666;
}

body.cracked {
  animation: crumble 1s ease forwards;
}

@keyframes crumble {
  0% { opacity: 1; transform: scale(1) rotate(0); }
  50% { opacity: 0.5; transform: scale(0.9) rotate(2deg); }
  100% { opacity: 0; transform: scale(0.7) rotate(-5deg); }
}

