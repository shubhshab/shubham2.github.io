const terminal = document.getElementById("terminal-output");

const logs = [
  "[+] Initializing cyber security modules...",
  "[+] Connecting to remote host 192.168.1.1",
  "[+] Bypassing firewall rules...",
  "[+] Access granted ✔",
  "[+] Scanning open ports...",
  "[!] Vulnerability detected: SQL Injection",
  "[+] Deploying AI intrusion detection...",
  "[+] Monitoring traffic in real-time...",
  "[✔] System secured successfully",
];

let index = 0;

function typeLog() {
  if (index < logs.length) {
    terminal.innerHTML += logs[index] + "\n";
    terminal.scrollTop = terminal.scrollHeight;
    index++;
  } else {
    index = 0;
    terminal.innerHTML = "";
  }
}

setInterval(typeLog, 1200);
