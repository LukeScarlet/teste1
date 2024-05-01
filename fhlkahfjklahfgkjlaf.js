document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obter os valores dos campos do formulário
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // Aqui você pode fazer algo com os dados, como enviar para um servidor via AJAX
    
    // Exemplo de exibição dos dados
    alert("Nome: " + name + "\nE-mail: " + email + "\nMensagem: " + message);
});
