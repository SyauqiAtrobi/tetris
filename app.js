let board = document.querySelector('.board-section');

for (let i = 0; i < 200; i++) {
    let block = '<div class="block"></div>';
    board.innerHTML += block;
}

falls = () => {
    let fall_count = 50;

    let container = document.querySelector('.container');

    for (let i = 0; i < fall_count; i++) {
        // Random angka 0 atau 1
        let binary = Math.random() < 0.5 ? '0' : '1';

        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);

        let size = Math.random() * 40;

        let duration = Math.random() * 70 + 30;

        // Elemen <span> untuk angka
        let span = document.createElement('span');

        span.className = 'fall';
        span.textContent = binary;

        // Gaya CSS untuk posisi dan animasi
        span.style.fontSize = 10 + size + 'px';
        span.style.position = 'absolute';
        span.style.left = x + 'px';
        span.style.bottom = y + 'px';
        span.style.animation = `fall ${2 + duration}s linear infinite`;
        span.style.color = 'greenyellow'; // Warna angka

        container.appendChild(span);
    }
};

falls();

let loading_square = document.querySelector('.square');

for (let i = 0; i < 16; i++) {
    loading_square.innerHTML += '<div></div>';
}
