<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="cadastre.css">
</head>
<body>
    <?php 
        $nome = $_GET['nome'];
        $email = $_GET['email'];

        echo "CADASTRADO";
        echo "Nome: $nome <br>";
        echo "E-mail: $email";

        echo "MEU Número: 47 9722-3437"
    ?> 
</body>
</html>
