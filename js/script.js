const data = [
    { sound: 'sounds/SNARE-01.wav' },
    { sound: 'sounds/SNARE-02.wav' },
    { sound: 'sounds/SNARE-03.wav' },
    { sound: 'sounds/SNARE-04.wav' },
    { sound: 'sounds/SNARE-05.wav' },
    { sound: 'sounds/SNARE-06.wav' },
    { sound: 'sounds/SNARE-07.wav' },
    { sound: 'sounds/SNARE-08.wav' },
    { sound: 'sounds/SNARE-09.wav' }
];

const drumkit = document.getElementById('drumkit');

data.forEach((item, index) => {
    const drumEl = document.createElement('div');
    drumEl.classList.add('drum', `color-${index + 1}`);
    drumkit.appendChild(drumEl);

    drumEl.addEventListener('click', () => {
        const audio = new Audio(item.sound);
        audio.play();

        drumEl.classList.add('active');
        setTimeout(() => drumEl.classList.remove('active'), 150);
    });
});
