document.addEventListener('DOMContentLoaded', () => {
    // 1. Live Dating Timer Logic
    // Set to April 30, 2024
    const startDate = new Date('2024-04-30T00:00:00').getTime();
    
    function updateTimer() {
        const now = new Date().getTime();
        const distance = now - startDate;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    }
    
    setInterval(updateTimer, 1000);
    updateTimer();

    // 2. Apology "Dodging Button" Game Logic
    const noBtn = document.getElementById('btn-no');
    const yesBtn = document.getElementById('btn-yes');
    const gameArea = document.getElementById('gameArea');
    const successScreen = document.getElementById('success-screen');

    // Make the No button run away!
    noBtn.addEventListener('mouseover', () => {
        const areaWidth = gameArea.clientWidth;
        const areaHeight = gameArea.clientHeight;
        const btnWidth = noBtn.clientWidth;
        const btnHeight = noBtn.clientHeight;

        // Ensure jumping stays within limits of the game area boundary
        const randomX = Math.floor(Math.random() * (areaWidth - btnWidth));
        const randomY = Math.floor(Math.random() * (areaHeight - btnHeight));

        noBtn.style.position = 'absolute';
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    });

    // Handle Yes Click
    yesBtn.addEventListener('click', () => {
        gameArea.style.display = 'none';
        document.querySelector('.apology-text').style.display = 'none';
        
        successScreen.classList.remove('hidden');
        successScreen.style.animation = 'fadeIn 1.5s ease forwards';
    });
});
