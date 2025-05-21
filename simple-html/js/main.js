const linkExterno = 
    document.querySelector('a[title="Ir para o Google Maps"]');

linkExterno.addEventListener('click', () => {
    alert("Você será redirecionado a um link externo")
})