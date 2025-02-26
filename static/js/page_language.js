// Control de idioma
const langBtn = document.getElementById('lang-btn');
const flagImg = document.getElementById('flag-img');
const texts = document.querySelectorAll('[data-lang-en], [data-lang-es]');

langBtn.addEventListener('click', () => {
    const lang = langBtn.dataset.lang;
    if (lang === 'en') {
        // Switch to Spanish
        langBtn.innerHTML = '<img src="https://flagcdn.com/w20/es.png" alt="Spain Flag"> ';
        langBtn.dataset.lang = 'es';
        flagImg.src = 'https://flagcdn.com/w20/es.png';
        texts.forEach(el => el.textContent = el.dataset.langEs);
    } else {
        // Switch to English
        langBtn.innerHTML = '<img src="https://flagcdn.com/w20/us.png" alt="USA Flag"> ';
        langBtn.dataset.lang = 'en';
        flagImg.src = 'https://flagcdn.com/w20/us.png';
        texts.forEach(el => el.textContent = el.dataset.langEn);
    }
});