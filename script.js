const botao = document.getElementById('meuBotao');

botao.addEventListener('click', function() {
    alert('Olá! O seu JavaScript está funcionando perfeitamente na página lilás!');
    botao.innerText = "Você clicou!";
    document.body.style.backgroundColor = '#FFF0F5'; 
});
