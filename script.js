function blowOut() {
  const flame = document.getElementById('flame');
  if (flame) flame.style.display = 'none';
}

function relight() {
  const flame = document.getElementById('flame');
  if (flame) flame.style.display = 'block';
}
