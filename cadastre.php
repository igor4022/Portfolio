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
    $nome = $_POST['nome'];
    $email  = $_POST['email'];

    echo "Nome: $nome<br>";
    echo "E-mail: $email<br>";
    echo "Bem vindo $nome, meu número 47 9722-3437";
    ?>
</body>
</html>