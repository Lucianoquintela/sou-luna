

const radios = document.querySelectorAll('.slider-content input');
const sliderContent = document.querySelector('.slider-content');
const manualButtons = document.querySelectorAll('.nav-manual .manual-btn');

function setActiveButton(index) {
    manualButtons.forEach((button, i) => {
        button.classList.toggle('active', i === index);
    });
}

radios.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        sliderContent.style.transform = `translateX(-${index * 100}%)`;
        setActiveButton(index);
    });
});

let counter = 0;
setInterval(() => {
    counter = (counter + 1) % radios.length;
    radios[counter].checked = true;
    sliderContent.style.transform = `translateX(-${counter * 100}%)`;
    setActiveButton(counter);
}, 5000);

// Inicializar o botão ativo
setActiveButton(counter);
