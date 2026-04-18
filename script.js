document.addEventListener('DOMContentLoaded', () => {
    // 1. Live Dating Timer Logic
    const startDate = new Date('2024-04-13T00:00:00').getTime();

    function updateTimer() {
        const now = new Date().getTime();
        const distance = now - startDate;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysEl = document.getElementById('days');
        if (daysEl) {
            daysEl.innerText = days;
            document.getElementById('hours').innerText = hours;
            document.getElementById('minutes').innerText = minutes;
            document.getElementById('seconds').innerText = seconds;
        }
    }

    setInterval(updateTimer, 1000);
    updateTimer();

    // 2. Apology "Dodging Button" Game Logic
    const noBtn = document.getElementById('btn-no');
    const yesBtn = document.getElementById('btn-yes');
    const gameArea = document.getElementById('gameArea');
    const successScreen = document.getElementById('success-screen');

    if (noBtn) {
        noBtn.addEventListener('mouseover', () => {
            const areaWidth = gameArea.clientWidth;
            const areaHeight = gameArea.clientHeight;
            const btnWidth = noBtn.clientWidth;
            const btnHeight = noBtn.clientHeight;

            const randomX = Math.floor(Math.random() * (areaWidth - btnWidth));
            const randomY = Math.floor(Math.random() * (areaHeight - btnHeight));

            noBtn.style.position = 'absolute';
            noBtn.style.left = `${randomX}px`;
            noBtn.style.top = `${randomY}px`;
        });
    }

    if (yesBtn) {
        yesBtn.addEventListener('click', () => {
            gameArea.style.display = 'none';
            document.querySelector('.apology-text').style.display = 'none';

            successScreen.classList.remove('hidden');
            successScreen.style.animation = 'fadeIn 1.5s ease forwards';
        });
    }

    // 3. SPA Enter Site Logic
    const enterSiteBtn = document.getElementById('enter-site-btn');
    const welcomeGate = document.getElementById('welcome-gate');
    const mainContent = document.getElementById('main-content');

    if (enterSiteBtn) {
        enterSiteBtn.addEventListener('click', () => {
            // Hide the gate
            welcomeGate.style.opacity = '0';
            welcomeGate.style.transition = 'opacity 0.8s ease';

            setTimeout(() => {
                welcomeGate.style.display = 'none';

                // Show Main Content
                mainContent.classList.remove('hidden');
                mainContent.style.opacity = '0';
                mainContent.style.transition = 'opacity 1s ease-in';

                // Trigger reflow
                void mainContent.offsetWidth;
                mainContent.style.opacity = '1';

                // Scroll to top
                window.scrollTo(0, 0);
            }, 800);
        });
    }
});
