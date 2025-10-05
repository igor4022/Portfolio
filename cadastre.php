<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BEM-VINDO</title>
    <link rel="stylesheet" href="cadastre.css">
</head>
<body>
    <h1>BEM-VINDO!</h1>
    <p>Meu número: <strong>47 9722-3437</strong></p>
    <p>Caso esteja interessado é só me ligar</p>

    <img src="imagens/bemvindo-8.gif" alt="">
    <?php 
    
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Captura os dados do formulário
    $nome = htmlspecialchars($_POST["nome"]);
    $email = htmlspecialchars($_POST["email"]);
    $mensagem = htmlspecialchars($_POST["mensagem"]);

    // Exemplo de processamento: Exibir os dados
    echo "<h1>Dados recebidos:</h1>";
    echo "<p>Nome: $nome</p>";
    echo "<p>E-mail: $email</p>";
    echo "<p>Mensagem: $mensagem</p>";

} else {
    echo "Método de requisição inválido.";
}
    ?>
</body>
</html>