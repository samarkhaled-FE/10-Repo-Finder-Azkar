// counter.js
export function createCounter(item) {
    const counter = document.createElement('span');
    counter.classList.add('counter');
    counter.innerHTML = `♥ (0)`; 

    counter.style.fontSize = '20px'; 
    counter.style.cursor = 'pointer'; 
    counter.style.transition = 'transform 0.2s, color 0.3s'; 

    counter.addEventListener('click', () => {
        let count = parseInt(counter.getAttribute('data-count'), 10) || 0;
        if (count < item.REPEAT) {
            count++;
            counter.setAttribute('data-count', count); 
            counter.innerHTML = `♥ (${count})`; 

            counter.style.color = '#63AB61'; 
            
            counter.style.transform = 'scale(1.2)'; 
            setTimeout(() => counter.style.transform = 'scale(1)', 200); 
        }
    });

    return counter;
}
