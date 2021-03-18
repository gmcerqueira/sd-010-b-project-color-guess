function generateColors() {
  const colors = document.querySelectorAll('.ball');

  for (let i = 0; i < colors.length; i += 1) {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;

    colors[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
}

generateColors();
