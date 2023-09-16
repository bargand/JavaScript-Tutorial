// Function to create and animate multiple balloons
function createBalloons() {
    const numBalloons = 10;
    const balloonsContainer = document.querySelector('.balloons');
  
    for (let i = 0; i < numBalloons; i++) {
      const balloon = document.createElement('div');
      balloon.classList.add('balloon');
      balloon.style.left = `${Math.random() * 90}%`;
      balloon.style.animationDelay = `${Math.random()}s`;
      balloon.innerHTML = '<img src="balloon.gif" alt="Balloon" width="80">';
      balloonsContainer.appendChild(balloon);
    }
  }
  
  // Function to send birthday wishes
  function sendWishes() {
    const title = document.querySelector('.title');
    title.textContent = "Happy Birthday to You!";
    title.style.color = "#e64a19";
  
    const balloonsContainer = document.querySelector('.balloons');
    balloonsContainer.innerHTML = '<img src="confetti.gif" alt="Confetti" width="80%">';
  
    const btn = document.querySelector('.btn');
    btn.textContent = "Wishes Sent!";
    btn.style.backgroundColor = "#333";
    btn.disabled = true;
  }
  
  // Call the createBalloons function to generate balloons
  createBalloons();
  