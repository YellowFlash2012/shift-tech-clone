const darkLightBtn = document.querySelector('.dark-light');

// dark light theme toggle
darkLightBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})