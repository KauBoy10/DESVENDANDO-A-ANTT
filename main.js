document.addEventListener('DOMContentLoaded', () => {
    const moreInfoBtn = document.getElementById('moreInfoBtn');
    const moreInfo = document.getElementById('moreInfo');
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    moreInfoBtn.addEventListener('click', () => {
        moreInfo.classList.toggle('hidden');
        moreInfoBtn.textContent = moreInfo.classList.contains('hidden') ? 'Saiba mais' : 'Mostrar menos';
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        formResponse.classList.remove('hidden');
        formResponse.innerHTML = `<p>Obrigado, ${name}! Sua mensagem foi enviada com sucesso.</p>`;
        
        // Resetando o formulário
        contactForm.reset();
    });
});
