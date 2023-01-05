const inputEl = document.getElementById('font-size-control');
const inputElText = document.getElementById('text');

inputEl.addEventListener('input', () => {
    inputElText.style.fontSize = inputEl.value + 'px';
})