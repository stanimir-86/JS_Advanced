function attachGradientEvents() {
    //selector elements

    let gradientELement = document.getElementById('gradient');
    let resultELement = document.getElementById('result');

    const gradientMouseoverHandler = (e) => {
        let percent = Math.floor((e.offsetX / (e.target.clientWidth - 1)) * 100);
        resultELement.textContent = `${percent}%`;
    };
    gradientELement.addEventListener('mousemove', gradientMouseoverHandler);
}