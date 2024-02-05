function showMessage(response) {
  const messageContainer = document.getElementById('message-container');
  const animationsContainer = document.getElementById('animations-container');

  if (response === 'yes') {
    messageContainer.style.display = 'block';
    messageContainer.innerHTML = '<p>¡Qué hermoso! 💖 bueno nos pasamos el dia entero en tu casa viendo peli y comiendo palomitas? 😊.</p>';
    animationsContainer.innerHTML = getAnimationsHTML();
  } else {
    messageContainer.style.display = 'block';
    messageContainer.innerHTML = '<p>como que no 😢, dime porque 😞 🌹.</p>';
    animationsContainer.innerHTML = '';
  }
}

function getAnimationsHTML() {
  let animationsHTML = '';
  for (let i = 0; i < 3; i++) {
    animationsHTML += '<div class="animation">&hearts;</div>';
  }
  return animationsHTML;
}