const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

const newEpisodesTime = new Date(`May 3 ${currentYear} 23:30:00`);

// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = newEpisodesTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add time values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;

  // Show Spinner before countdown
  setTimeout(() => {
    countdown.style.display = 'flex';
  }, 1000);
}

// Run updateCountdown function every second
setInterval(updateCountdown, 1000);