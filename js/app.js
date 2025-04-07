function launchConfetti() {
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 }
    });
  }
  
  let count = 0;
  const interval = setInterval(() => {
    launchConfetti();
    count++;
    if (count === 5) clearInterval(interval);
  }, 800);
  