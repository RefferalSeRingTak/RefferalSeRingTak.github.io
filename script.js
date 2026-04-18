document.addEventListener('DOMContentLoaded', () => {
    const surpriseBtn = document.getElementById('surpriseBtn');
    const messageCard = document.getElementById('messageCard');
    const closeBtn = document.getElementById('closeBtn');

    surpriseBtn.addEventListener('click', () => {
        // Remove 'hidden' utility class if it's there
        messageCard.classList.remove('hidden');
        // Small timeout to allow display block to apply before animating opacity/transform via CSS
        setTimeout(() => {
            messageCard.classList.add('show');
        }, 10);
    });

    closeBtn.addEventListener('click', () => {
        messageCard.classList.remove('show');
        setTimeout(() => {
            messageCard.classList.add('hidden');
        }, 400); // match transition duration
    });
});
