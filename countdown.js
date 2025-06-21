const countdownDate = new Date("December 21, 2025 12:21:00").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    document.querySelector('.countdown').innerHTML = "It's Wedding Time!";
    return;
  }

  document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
};

setInterval(updateCountdown, 1000);
