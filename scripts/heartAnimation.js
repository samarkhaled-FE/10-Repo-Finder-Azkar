// scripts/heartAnimation.js
export function showHearts() {
    const container = document.getElementById('containercongratulation');

    const stopInterval = setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart-emoji');
        heart.innerHTML = '&#128154;'; 
        heart.style.left = `${Math.random() * 100}%`; 
        heart.style.animationDuration = `${Math.random() * 1 + 2.5}s`; 
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }, 100);

    setTimeout(() => {
        clearInterval(stopInterval);
    }, 3000);
}
