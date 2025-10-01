<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
$nome = $_GET['nome'];
$email = $_GET['email'];

echo "CADASTRADO";
echo "Nome: $nome <br>";
echo "E-mail: $email";
?> 
</body>
</html>
