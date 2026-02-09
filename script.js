const intro = document.getElementById("intro-terminal");
const introOut = document.getElementById("intro-output");
const portfolio = document.getElementById("portfolio-content");

const introLogs = [
  "Booting secure environment...",
  "Loading cyber modules...",
  "Initializing AI firewall...",
  "Establishing encrypted tunnel...",
  "Access granted ✔",
  "",
  "Welcome, Recruiter."
];

let i = 0;

const introInterval = setInterval(() => {
  introOut.innerHTML += introLogs[i] + "\n";
  i++;

  if (i === introLogs.length) {
    clearInterval(introInterval);
    setTimeout(() => {
      intro.style.display = "none";
      portfolio.style.display = "block";
    }, 1000);
  }
}, 700);
