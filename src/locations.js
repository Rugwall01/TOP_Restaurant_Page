

export const location = (function () {
    const text = document.createElement('div');
    // PH stands for placeholder right here
    text.classList.add('locationsPH');

    text.textContent = `COMMING SOON!`;

    const getText  = () => text;

    return { getText };
})();